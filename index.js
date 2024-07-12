
const { Engine, Render, Runner, World, Bodies } = Matter

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create()
const { world } = engine

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: true,
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine)



//walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),

]

World.add(world, walls)

const shuffle = (arr) => {
let counter = arr.length;
while(counter > 0){
    const index = Math.floor(Math.random() * counter)

    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp

}
return arr
}
const grid = Array(cells) //more rows
    .fill(null)
    .map(() => Array(cells).fill(false)) // more columns

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false))

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false))


const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) =>{
    // if i have visited the cell at [row,column] , then return
    if(grid[row][column]){
        return
    }
    // Mark this cell as being visited
    grid[row][column] = true

    // Assemble randomly-ordered list of neighbors
const neighbors = shuffle([ 
        [row-1 , column, 'up'], // above
        [row, column+1 ,'right'],  // Right
        [row+1 , column ,'down'], // Below
        [row , column-1, 'left']  // left 

]);
    // for each neighbor
for (let neighbor of neighbors){
    const [nextRow , nextColumn , direction] = neighbor
    // see if that neihbor is out of bounds
    if(nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells){
        continue; // dont leave the loop but move next 
    }
    // if we have visited that neighbor, continue to next neighbor
    if(grid[nextRow][nextColumn]){
        continue;
    }
    // Remove a wall from either horizontals or verticals




}
    // visit that next cell

}

stepThroughCell(startRow,startColumn)

console.log(grid)


 