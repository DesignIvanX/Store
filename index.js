import View from './src/view.js'
import Model from './src/model.js'

const model = new Model()
const view = new View()
view.setModel(model)
model.setView(view)
