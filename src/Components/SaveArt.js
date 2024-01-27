import { useState } from 'react';
import style from './SaveArt.module.css';
import BackButton from './layout/BackButton';

const ArteForm = ({ onVoltarClick }) => {
    const [formData, setFormData] = useState({
        nome_quadro: '',
        nome_pintor: '',
        ano_quadro: '',
        valor: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7288/api/Arte', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Arte adicionada com sucesso!');
                setSubmitStatus('success');
                setFormData({
                    nome_quadro: '',
                    nome_pintor: '',
                    ano_quadro: '',
                    valor: '',
                });
            } else {
                console.error('Erro ao adicionar arte:', response.statusText);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Erro na requisição:', error.message);
            setSubmitStatus('error'); 
        }
    };

    return (
        <div className={style.form_control}>
            <form onSubmit={handleSubmit}>
                <label>
                    *Nome do Quadro:
                    <input
                        type="text"
                        name="nome_quadro"
                        value={formData.nome_quadro}
                        onChange={handleInputChange}
                        placeholder="Insira o nome do quadro.."
                        required
                    />
                </label>
                <br />
                <label>
                    *Nome do Pintor:
                    <input
                        type="text"
                        name="nome_pintor"
                        value={formData.nome_pintor}
                        onChange={handleInputChange}
                        placeholder="Insira o nome do pintor.."
                        required
                    />
                </label>
                <br />
                <label>
                    *Ano do Quadro:
                    <input
                        type="text"
                        name="ano_quadro"
                        value={formData.ano_quadro}
                        onChange={handleInputChange}
                        placeholder="DD-MM-AAAA"
                        required
                    />
                </label>
                <br />
                <label>
                    *Valor:
                    <input
                        type="text"
                        name="valor"
                        value={formData.valor}
                        onChange={handleInputChange}
                        placeholder="Insira o valor do quadro.."
                        required
                    />
                </label>
                <br />
                <div className={style.buttons}>
                    <button type="submit" className={`${style.button} ${style.saveButton}`}>Adicionar Arte</button>
                    <BackButton to="/" text="Voltar" />
                </div>
                <div className={style.msg}>
                    {submitStatus === 'success' && <p className={style.successMessage}>Arte adicionada com sucesso!</p>}
                    {submitStatus === 'error' && <p className={style.errorMessage}>Erro ao adicionar arte. Tente novamente mais tarde.</p>}
                </div>
            </form>
        </div>
    );
};

export default ArteForm;
