import { useNavigate } from "react-router-dom";

import { nomeAlimentos } from "../types";

import { Formik, Field, Form } from "formik";

import { esquemaValidacao } from "../schemas/validationSchema";

const CalculadoraChurrasco = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
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
              <div>
                <label htmlFor="pessoas">Número de pessoas</label>
                <Field name="pessoas" type="number" />
                {errors.pessoas && touched.pessoas ? (
                  <p>{errors.pessoas}</p>
                ) : null}
              </div>
              <h2>Selecione os alimentos para o churrasco:</h2>
              {Object.keys(nomeAlimentos).map((alimento) => (
                <div>
                  <Field
                    type="checkbox"
                    name="selecaoAlimentos"
                    value={alimento}
                  />
                  <label htmlFor="selecaoAlimentos">
                    {nomeAlimentos[alimento]}
                  </label>
                </div>
              ))}
              {errors.selecaoAlimentos && touched.selecaoAlimentos ? (
                <p>{errors.selecaoAlimentos}</p>
              ) : null}
              <button type="submit">Calcular</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CalculadoraChurrasco;
