module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}], // converte para a versão atual do nodejs
    '@babel/preset-typescript'
  ]
}
