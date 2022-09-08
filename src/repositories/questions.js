import { useMemo } from "react";

export const questions = {
  "Qual é a sua parte mais bonita?": {
    description: "Pergunta nível: Hard",
    responses: [
      {
        text: "Eu todo",
        status: {
          narcisista: 10,
          desrespeitado: 10,
        },
      },
      {
        text: "Quem eu realmente sou",
        status: {
          desrespeitado: 20,
          narcisista: 10,
        },
      },
      {
        text: "Nem te conto haha",
        peculiarities: {
          moveButton: true,
        },
        status: {
          teimoso: 80,
          deuso: 30,
        },
      },
    ],
  },
  "Quem é mais forte?": {
    description: "Pergunta nível: Pegadinha",
    responses: [
      {
        text: "Ruan",
        status: {
          convencido: 20,
          brincalhao: 40,
          desrespeitado: 10,
        },
      },
      {
        text: "Luan",
        status: {
          passivo: 20,
          convencido: 10,
          humilde: -50,
        },
      },
      {
        text: "Ambos",
        status: {
          passivo: 10,
          humilde: 5,
          passivo: 10,
          humilde: 5,
        },
      },
    ],
  },
  "Voces beijariam a si mesmos?": {
    description: "Deve haver consenso",
    responses: [
      {
        text: "Sim",
        status: {
          narcisista: 40,
          especial: 40,
          "masculinidade fragil": -80,
        },
      },
      {
        text: "Não",
        peculiarities: {
          moveButton: true,
        },
        status: {
          teimoso: 80,
          deuso: 30,
        },
      },
      {
        text: "Talvez",
        status: {
          passivo: 10,
          "masculinidade fragil": 20,
        },
      },
    ],
  },
  "Qual consideram mais otaku?": {
    description: "Quero ver sangue",
    responses: [
      {
        text: "Só vejo os antigão",
        status: {
          passivo: 15,
          lolicon: 10,
        },
      },
      {
        text: "Vejo de tudo e mais um pouco",
        status: {
          passivo: 5,
          lolicon: 5,
        },
      },
    ],
  },
  "Já dormiu com o vítor agarradinho ou tem vontade?": {
    description: "Hehe se revelem ^v^",
    responses: [
      {
        text: "Querooooo, bora marcar?",
        status: {
          poser: 30,
        },
      },
      {
        text: "Nem ferrando, gosto dele mas sou macho",
        status: {
          poser: 30,
        },
      },
    ],
  },
  "Você tem o whatsapp mais poluido?": {
    description: "Tirem as crianças da sala",
    responses: [
      {
        text: "Sim... quem te contou?",
        status: {
          lolicon: 20,
        },
      },
      {
        text: "Desconheço essa conversa, o que é whatsapp?",
        status: {
          lolicon: 20,
          humilde: -20,
          poser: 60,
        },
      },
      {
        text: "Não! sou um santo",
        status: {
          Safado: 30,
        },
      },
    ],
  },
  "Qual sua definição de sofrer?": {
    description: "fofocas a vista",
    responses: [
      {
        text: "Bater dedinho na quina",
        status: {
          Carente: 20,
        },
      },
      {
        text: "Desligarem o server do game",
        status: {
          sofredor: 30,
        },
      },
      {
        text: "Perder o Cartão de credito",
        status: {
          sofredor: 30,
        },
      },
      {
        text: "Projeto fechar e não ter salvo",
        status: {
          sofredor: 30,
        },
      },
      {
        text: "Ser rebaixado de elo na new season",
        status: {
          sofredor: 30,
        },
      },
      {
        text: "Pedirem um pedaço do teu lanche",
        status: {
          sofredor: -60,
          Diabedico: 20,
          Hipertensão: 60,
          humilde: -20,
        },
      },
      {
        text: "jogar esse jogo idiota",
        peculiarities: {
          alterName: "Eu ter nascido eu",
        },
        status: {
          humilde: -40,
          "sem nocao": 40,
        },
      },
    ],
  },
  "Qual a melhor lane do lol?": {
    description: "te desafio a responder",
    responses: [
      {
        text: "Top",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 20,
        },
      },
      {
        text: "sup",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 30,
        },
      },
      {
        text: "Onde a clau ta",
        status: {
          gado: 30,
        },
      },
    ],
  },
  "Quem é o melhor parceiro para se levar para sair?": {
    description: "woint!!! ^///^ love in the air",
    responses: [
      {
        text: "Meus brother",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 20,
        },
      },
      {
        text: "Só role dos pilares",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 30,
        },
      },
      {
        text: "Tendo o vítor ta tudo certo",
        status: {
          gado: 30,
        },
      },
    ],
  },
  "Qual a melhor comida?": {
    description: "tente nos ganhar pelo estomago",
    responses: [
      {
        text: "Doces",
        status: {
          Diabedico: 20,
          safado: 10,
        },
      },
      {
        text: "Salgados",
        status: {
          Hipertensão: 30,
        },
      },
    ],
  },
  "Melhor meia estação ou calor?": {
    description: "Até porque vocês não sabem o que é frio direito",
    responses: [
      {
        text: "Calor",
        status: {
          acomodado: 10,
        },
      },
      {
        text: "primavera",
        peculiarities: {
          alterName: "Calor",
        },
        status: {
          Nomade: 30,
        },
      },
      {
        text: "outono",
        peculiarities: {
          alterName: "Calor",
        },
        status: {
          Nomade: 30,
        },
      },
      {
        text: "Frio",
        peculiarities: {
          moveButton: true,
          alterName: "Calor",
        },
        status: {
          lerdo: 30,
          "sem nocao": 40,
        },
      },
      {
        text: "Todos",
        peculiarities: {
          alterName: "Calor!!!!! Quero ver queimar",
        },
        status: {
          Nomade: 30,
        },
      },
    ],
  },
  "Como se sente hoje?": {
    description: "conta pra tia Clau e pro tio Vítinho",
    responses: [
      {
        text: "Um docinho",
        status: {
          Diabedico: 20,
        },
      },
      {
        text: "to pura gostosura",
        status: {
          Hipertensão: 30,
        },
      },
    ],
  },
  "Ta gostando do teste?": {
    description: "me conta???",
    responses: [
      {
        text: "sim <3",
        status: {
          Diabedico: 40,
          passivo: 30,
          gado: 70,
          humilde: 2,
        },
      },
      {
        text: "Não! faz de novo e faz bem feito",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 30,
          teimoso: 50,
          especial: 70,
        },
      },
    ],
  },
  "Pensa em casar algum dia?": {
    description: "me chamaaaaa",
    responses: [
      {
        text: "sim <3",
        status: {
          Diabedico: 70,
          passivo: 30,
          gado: 100,
          humilde: 0.1,
        },
      },
      {
        text: "Não! nem ferrando, já pensou uma pessoa todo dia do teu lado??",
        status: {
          passivo: 30,
          teimoso: 50,
          especial: 70,
        },
      },
      {
        text: "Não! pelo menos ainda não",
        status: {
          desesperado: -30,
          teimoso: 50,
          especial: 70,
        },
      },
    ],
  },
  "Você pagaria o lanche pra ti e pra garota?": {
    description: "pergunta polemica do momento",
    responses: [
      {
        text: "sim, pago de boa",
        status: {
          Diabedico: 70,
          passivo: 30,
          gado: 100,
          humilde: 0.1,
        },
      },
      {
        text: "Só que nunca",
        status: {
          Diabedico: 70,
          passivo: -80,
          gado: 100,
          humilde: -40,
        },
      },
      {
        text: "Não, acho que cada um paga o seu",
        status: {
          Hipertensão: 10,
          Diabedico: 10,
          teimoso: 50,
          especial: 70,
          humilde: -30,
        },
      },
      {
        text: "ela que pague",
        peculiarities: {
          moveButton: true,
          alterName: "Pagooooooooooooooooooooo",
        },
        status: {
          Diabedico: 70,
          passivo: 30,
          gado: 100,
          humilde: -5.8,
        },
      },
    ],
  },
  "Melhor fine para o cinema?": {
    description: "olha que essa ai é só dos pilares",
    responses: [
      {
        text: "Fine de tubetes pra fazer tipo a dama e o vagabundo",
        status: {
          Diabedico: 10,
          passivo: 30,
          gado: 100,
          humilde: 0.1,
        },
      },
      {
        text: "aqueles de hamburguer porque eu queria estar com um x-tudo e não com ela",
        status: {
          Hipertensão: 10,
          Diabedico: 10,
          teimoso: 50,
          especial: 70,
          humilde: -30,
        },
      },
      {
        text: "De beijinho",
        status: {
          Diabedico: 70,
          safado: 80,
          lolicon: 30,
          passivo: 30,
          gado: 10,
          humilde: -5.8,
        },
      },
      {
        text: "nenhuma, vou pro cinema pra ver filme",
        status: {
          lolicon: 60,
          "sem nocao": 60,
          lerdo: 60,
          passivo: 70,
          humilde: 60,
        },
      },
      {
        text: "De banana, nem te falo o motivo",
        status: {
          passivo: 69.9,
        },
      },
    ],
  },
  "Qual tipo de mulher prefere?": {
    description: "só não vale o que estão nas regras dos pilares certo?",
    responses: [
      {
        text: "todas",
        status: {
          Diabedico: 70,
          brincalhao: 60.6,
          passivo: 30,
          gado: 530,
          humilde: 0.1,
        },
      },
      {
        text: "Baixinha, morena e bumbum grande",
        status: {
          desesperado: 30,
          teimoso: 50,
          gado: 30,
          especial: 70,
        },
      },
      {
        text: "alta, loira e rica",
        peculiarities: {
          alterName: "velha da lancha hehe vou de baby boy",
        },
        status: {
          desesperado: 30,
          teimoso: 50,
          gado: 40,
          acomodado: 40,
          especial: 70,
        },
      },
      {
        text: "mediana, cabelo colorido e tatuadora",
        status: {
          gado: 50,
          especial: 30,
        },
      },
      {
        text: "que só quer ficar por ficar",
        status: {
          desesperado: 90,
          lolicon: 100,
          teimoso: 70,
          especial: 70,
        },
      },
      {
        text: "Aquelas que querem algo real e serio",
        status: {
          desesperado: 1000,
          lolicon: 100,
          teimoso: 80,
          especial: 70,
          lerdo: 60,
          Nomade: 10,
          acomodado: 20,
        },
      },
      {
        text: "A tia da cantina da escola só ela me entende",
        status: {
          desesperado: 50.9,
          humilde: 30.2,
          "morto da fome": 30,
        },
      },
      {
        text: "Quero pular essa pergunta",
        peculiarities: {
          moveButton: true,
        },
        status: {
          desesperado: 10,
        },
      },
    ],
  },
  "Ficaria com a garota do irmão?": {
    description: "fogo no parquinhooo",
    responses: [
      {
        text: "sim, obvio",
        status: {
          humilde: -33.8,
          passivo: -2,
        },
      },
      {
        text: "não, já fiz e não gostei",
        status: {
          especial: 70,
          humilde: -33.8,
          passivo: 70,
        },
      },
      {
        text: "Não isso é errado",
        peculiarities: {
          alterName: "To marcando um pra semana que vem",
        },
        status: {
          especial: 70,
          humilde: -33.8,
          passivo: 70,
          "sem nocao": 40,
          lerdo: 2.2,
        },
      },
    ],
  },
  "Sobre o feijão": {
    description: "Hehe se revelem ^v^",
    responses: [
      {
        text: "Encima do arroz, assim como voce encima de mim",
        status: {
          poser: 30,
          lolicon: 50,
          "morto da fome": 20,
          safado: 20,
        },
      },
      {
        text: "Arroz por cima porque sou desses",
        status: {
          passivo: 50,
        },
      },
      {
        text: "Sem feijao...",
        status: {
          desrespeitado: -90,
          teimoso: 60,
        },
      },
    ],
  },
  "Quem melhor quica a bola no baska?": {
    description: "Hehe se revelem ^v^",
    responses: [
      {
        text: "Luan tem propriede para falar de bola",
        status: {
          antissocial: -60,
          brincalhao: 55,
        },
      },
      {
        text: "Não tem ninguem melhor na enterrada do que o ruan quebra óculos",
        status: {
          desrespeitado: -90,
          convencido: 40,
        },
      },
    ],
  },
};

export const PersonalityExpected = {
  ruan: {
    result: [
      "Quase não identificada... mais compatível com LUAN",
      "Absurdamente similar ao LUAN",
      "Personalidade de manda-chuva, certamente LUAN",
      "Basta elevar o cosmo do seu coração LUAN",
    ],
    lolicon: 80,
    "sem nocao": 80,
    lerdo: 10,
    Nomade: 60,
    acomodado: 50,
    Hipertensão: 80,
    Diabedico: 30,
    gado: 80,
    desesperado: 20,
    desrespeitado: 80,
    teimoso: 60,
    deuso: 70,
    convencido: 80,
    brincalhao: 90,
    passivo: 100,
    humilde: 80,
    especial: 89,
    "masculinidade fragil": 24,
    poser: 30,
    safado: 90,
    Carente: 40,
    sofredor: 88,
    "morto da fome": 40,
  },
  luan: {
    result: [
      "Personalidade abstrata, mais compatível com LUAN",
      "Bárbaro como o LUAN",
      "Cristalino como as águas da pampulha, LUAN",
      "Tão valioso quanto o one piece LUAN",
    ],
    lolicon: 60,
    "sem nocao": 60,
    lerdo: 60,
    Nomade: 10,
    acomodado: 20,
    Hipertensão: 30,
    Diabedico: 80,
    gado: 50,
    desesperado: 60,
    desrespeitado: 5,
    teimoso: 80,
    deuso: 90,
    convencido: 90,
    brincalhao: 60,
    passivo: 70,
    humilde: 60,
    especial: 80,
    "masculinidade fragil": 100,
    poser: 80,
    safado: 50,
    Carente: 70,
    sofredor: 80,
    "morto da fome": 30,
  },
};
