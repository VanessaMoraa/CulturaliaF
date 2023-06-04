//boton de inicio y menu funcionando, cuadro para formulario, adecuarlo al draw.io
import Opinion from '@/components/opinion';
import React from 'react';
import Layout from "../layout/layout";

const opiniones = [
    {
        name: 'Juan Pérez',
        description:
            'Bogotano que ama una taza de café al atardecer, apasionado por el teatro, la lectura y el cine clásico, en mi perfil relato mi tiempo libre',
        event: 'Festival Estéreo Picnic',
        opinion:
            'Asistí los 4 días, jornadas exhaustivas con muchos sube y bajas, habían varios artistas que valían mucho la pena, pero entre tiempos ponían muchos artistas surgientes que no daban la talla, se tornaba aburrido',
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    },
    {
        name: "Juliana López",
        description: "Chilena apasionada por la música y el arte.",
        event: "Rock al parque 2022",
        opinion: "Todos los festivales que he visitado fueron bastante buenos, pero, en el último año, Rock al parque fue el peor, no hubo buenos artistas, la idea principal o la actividad de este evento se perdió y se convirtió en un Festival de Picnic Estereo, más Música pop que realmente rock y metal y más folclórica que cualquier otra cosa, espero que este año sea mejor, si es 25 años, esto debe ser épico.",
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    },
    {
        name: "Mario Mora",
        description: "Just vibing",
        event: "FEP 2020",
        opinion: "Hay que ser justos, y aunque los últimos años la logística se había ido al piso, en este 2019 el festival fue de primera. Todo muy bien organizado, desde el lugar donde se realizo, el transporte, la entrada, la salida, los baños, la excelente oferta de comidas, licores, etc. Definitivamente se puede volver a creer en este, el que para muchos, es el festival mas grande de música en Colombia.",
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    },
    {
        name: "Daniel Montaña",
        description: "Mexicano",
        event: "Feria de talentos",
        opinion: "No me gustó",
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    },
    {
        name: "Andrea Cortés",
        description: "Peruana",
        event: "Expoartesanías",
        opinion: "Es una feria artesanal en la que se exponen gran diversidad de artesanías, ropa, joyería, alimentos, etc típicos de nuestro país, demostrando la diversidad cultural y creativa de nuestros pueblos. Es la segunda vez que asisto y siempre me quedo asombrada de la variedad de productos de nuestro país. Es como visitar todo el país en un día.",
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    },
    {
        name: "Mariana Ramirez",
        description: "Española",
        event: "Festival de verano",
        opinion: "No hay mejor plan para conocer lugares, actividades y gente chevere. Durante el mes de Agosto los rolos y cachacos celebramos el cumpleaños de nuestra ciudad recorriendo y descubriendo todas las bondades que esta gran ciudad tiene para propios y visitantes. Entonces, si quieres salir a caminar, conocer nuevos amigos y hasta levantar, este es el plan!!. Pd:No se lo pierda, es económico y hay para todos los gustos",
        reseña: '¿Qué te parece esta opinión? ¡Califícalo!',
    }
]
export default function Foro() {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '45%',
                }}
            >
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        ¿Asististe a un evento? Deja que la comunidad conozca tu opinión!
                    </label>
                </div>
                <div style={{ width: '45%', justifySelf: 'center' }}>
                    <textarea
                        id="message"
                        className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe aquí lo que piensas..."
                    ></textarea>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        width: '80vw',
                        gap: '10px',
                    }}
                >
                    {opiniones.map((opinion, index) => {
                        return (
                            <Opinion
                                key={index}
                                title={opinion.name}
                                description={opinion.description}
                                evento={opinion.event}
                                opinion={opinion.opinion}
                                reseña={opinion.reseña}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}