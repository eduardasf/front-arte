import { useState } from 'react';
import style from './SaveArt.module.css';

const ArteForm = ({ onVoltarClick }) => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome_quadro: '',
        nome_pintor: '',
        ano_quadro: '',
        valor: '',
    });

    // Função para lidar com mudanças nos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7216/api/Arte', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Arte adicionada com sucesso!');
                // Limpar o formulário após o sucesso
                setFormData({
                    nome_quadro: '',
                    nome_pintor: '',
                    ano_quadro: '',
                    valor: '',
                });
            } else {
                console.error('Erro ao adicionar arte:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error.message);
        }
    };

    // Função para lidar com o clique no botão de voltar
    const handleVoltarClick = () => {
        onVoltarClick();
    };

    return (
        <div className={style.form_control}>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do Quadro:
                    <input
                        type="text"
                        name="nome_quadro"
                        value={formData.nome_quadro}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Nome do Pintor:
                    <input
                        type="text"
                        name="nome_pintor"
                        value={formData.nome_pintor}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Ano do Quadro:
                    <input
                        type="text"
                        name="ano_quadro"
                        value={formData.ano_quadro}
                        onChange={handleInputChange}
                        placeholder="YYYY-MM-DD"
                        required
                    />
                </label>
                <br />
                <label>
                    Valor:
                    <input
                        type="text"
                        name="valor"
                        value={formData.valor}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <div className={style.buttons}>
                    <button type="submit" className={`${style.button} ${style.saveButton}`}>Adicionar Arte</button>
                    <button type="button" className={`${style.button} ${style.backButton}`} onClick={handleVoltarClick}>Voltar</button>
                </div>
            </form>
        </div>
    );
};

export default ArteForm;