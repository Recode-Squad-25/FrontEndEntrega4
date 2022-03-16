import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import '../../styles/contato.css'

const Contato = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = 'service_colore';
    const templateID = 'template_colore';
    const userID = 'user_SSLfmmXgVv6jLC0TuXdAg';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                assunto: data.assunto,
                mensagem: data.mensagem
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato assim que possível.');
            }).catch(err => console.error(`Algo deu errado. ${err}`));
    };

    return (
        <div className='container-fluid contato'>
            <div className='contato-wrap'>
                <div>
                    <div className='text-center contato-h1'>
                        <h1>Fale conosco</h1>
                    </div>
                    <div className='text-center contato-p'>
                        <p>Para dúvidas e/ou e informações.</p>
                    </div>
                    <span className="success-message text-center">{successMessage}</span>
                </div>



                <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12 '>


                                {/* NOME INPUT */}
                                <div className='text-center'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Nome'
                                        name='nome'
                                        aria-invalid={errors.nome ? "true" : "false"}
                                        {...register("nome", {
                                            required: "Por favor, informe o seu nome",
                                            maxLength: {
                                                value: 20,
                                                message:
                                                    "O nome deve conter entre 6 e 20 caracteres.",
                                            },
                                        })}
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.nome && errors.nome.message}
                                </span>


                                {/* TELEFONE INPUT */}
                                <div className='text-center'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Telefone'
                                        phone='tefefone'
                                        aria-invalid={errors.telefone ? "true" : "false"}
                                        {...register('telefone', {
                                            required: 'Por favor, insira o número do seu telefone',
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className="error-message">
                                    {errors.telefone && errors.telefone.message}
                                </span>


                                {/* EMAIL INPUT */}
                                <div className='text-center'>
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='E-mail'
                                        name='email'
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register('email', {
                                            required: "Por favor, forneça seu email!",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email inválido"
                                            }
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className="error-message">
                                    {errors.email && errors.email.message}
                                </span>


                                {/* ASSUNTO INPUT */}
                                <div className='text-center'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Assunto'
                                        name='assunto'
                                        aria-invalid={errors.assunto ? "true" : "false"}
                                        {...register('assunto', {
                                            required: 'OOPS!, parece que você esqueceu de adicionar um assunto',
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className="error-message">
                                    {errors.assunto && errors.assunto.message}
                                </span>
                            </div>
                            <div className='col-md-6 col-sm-12'>


                                {/* MENSAGEM */}
                                <div className='text-center'>
                                    <textarea
                                        type='text'
                                        className='form-control'
                                        placeholder='Digite aqui a sua mensagem'
                                        name='mensagem' rows={6}
                                        aria-invalid={errors.mensagem ? "true" : "false"}
                                        {...register('mensagem', {
                                            required: "Por favor, digite aqui a sua mensagem...",
                                        })
                                        }
                                    ></textarea>
                                    <div className='line'></div>
                                </div>
                                <span className="error-message">
                                    {errors.mensagem && errors.mensagem.message}
                                </span>
                                <button className='btn btn-success text-center form-btn' type='submit'>ENVIAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato