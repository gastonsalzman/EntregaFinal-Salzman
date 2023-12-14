import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import styles from "../Formulario/formulario.module.css";
import img1 from '../../assets/contacto_administracion.jpg'



const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return ( 
        <>  
            <img src={img1} className={styles.Port1} alt="contacto" />
            <h1>Contacto Administración</h1>
            <p>Por favor completá el siguiente formulario con tu consulta para el área de Administración. Te responderemos a la mayor brevedad posible. Gracias!</p>

            <div className={styles.Formulario}>
                <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.Nombre}>
                    <label>Nombre: </label>
                    <input type="text" {...register('nombre', {
                        required: true,
                        maxLength: 10
                    })} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                </div>

                <div className={styles.Direccion}>
                    <label>Direccion: </label>
                    <input type="text" {...register('direccion', {
                        required: true
                    })} />
                </div>

                <div className={styles.Email}>
                    <label>Email: </label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>

                <div className={styles.Edad}>
                    <label>Edad: </label>
                    <input type="text" {...register('edad', {
                        validate: edadValidator
                    })} />
                    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                </div>

                <div className={styles.Pais}>
                    <label>País: </label>
                    <select {...register('pais')}>
                        <option value="es">Argentina</option>
                        <option value="it">Uruguay</option>
                        <option value="fr">Chile</option>
                    </select>
                </div>

                <div className={styles.Telefono}>
                    <label>¿Incluir teléfono?</label>
                    <input type="checkbox" {...register('incluirTelefono')} />
                </div>

                {incluirTelefono && (
                    <div className={styles.Telefono}>
                        <label>Teléfono: </label>
                        <input type="text" {...register('telefono')} />
                    </div>
                )}
                <input type="submit" value="Enviar" />
            </form>
        </div></>
)
};



export default Formulario;
