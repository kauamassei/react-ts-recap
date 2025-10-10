import * as Yup from "yup";

export const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number().min(1, "Número de pessoas é obrigatório"),
  selecaoAlimentos: Yup.array()
    .of(Yup.string())
    .test(
      "check-selecaoAlimentos",
      "Selecione pelo menos um alimento",
      (array) => array !== null && array!.length > 0
    ),
});
