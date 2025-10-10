import { useNavigate } from "react-router-dom";

import { nomeAlimentos } from "../types";

import { Formik, Field, Form } from "formik";

import { esquemaValidacao } from "../schemas/validationSchema";

import styles from "./CalculadoraChurrasco.module.css";

const CalculadoraChurrasco = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <Formik
          onSubmit={(values) => {
            navigate("/resultado", {
              state: {
                pessoas: values.pessoas,
                alimentosSelecionados: values.selecaoAlimentos,
              },
            });
            console.log("Teste");
          }}
          validationSchema={esquemaValidacao}
          initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label htmlFor="pessoas" className={styles.inputLabel}>
                  Número de pessoas
                </label>
                <Field name="pessoas" type="number" />
                {errors.pessoas && touched.pessoas ? (
                  <p className={styles.error}>{errors.pessoas}</p>
                ) : null}
              </div>
              <h2>Selecione os alimentos para o churrasco:</h2>
              {Object.keys(nomeAlimentos).map((alimento) => (
                <div>
                  <Field
                    type="checkbox"
                    name="selecaoAlimentos"
                    value={alimento}
                    className={styles.inputField}
                  />
                  <label htmlFor="selecaoAlimentos">
                    {nomeAlimentos[alimento]}
                  </label>
                </div>
              ))}
              {errors.selecaoAlimentos && touched.selecaoAlimentos ? (
                <p className={styles.error}>{errors.selecaoAlimentos}</p>
              ) : null}
              <button type="submit" className={styles.calculateButton}>
                Calcular
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CalculadoraChurrasco;
