const inventory = newInventory()

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    // inventory.style.display = 'flex'
    // inventory.style.flexDirection = 'row'
    // inventory.style.alignItems = 'center'
    // inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    // inventory.style.left = '0px'
    // inventory.style.bottom = '0px'

    inventory.id ='inventory-box'

    document.body.append(inventory)
    return inventory
}