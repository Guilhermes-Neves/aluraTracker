import msn from './messages'

const locators = {
  HOME: {
    titulo: 'h1',
    mensagem_inicial: '.lista > div',
    input_descricao_tarefa: `input[placeholder='${msn.MESSAGE.mensagem_input_placeholder}']`,
    xp_tempo_inicial: '//section[contains(., "00:00:00")]//section',
    fn_xp_botao: (textoDesejado) => `//button[contains(., '${textoDesejado}')]`
  }
}

export default locators;