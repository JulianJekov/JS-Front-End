function solve(input) {

    const n = Number(input.shift());
    const boardTokens = input.slice(0, n);
    const commands = input.slice(n);

    const board = boardTokens.reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(':');
        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }
        acc[assignee].push({ taskId, title, status, points: Number(points) });

        return acc;
    }, {});

    const commandParser = {
        'Add New': addNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': removeTask
    };

    commands.forEach((comandLine) => {
        const commandTokens = comandLine.split(':');
        commandParser[commandTokens[0]](...commandTokens.slice(1));
    });

    const toDoPoints = calculatePoints('ToDo');
    const inProgresPoints = calculatePoints('In Progress');
    const codeReviewPoints = calculatePoints('Code Review');
    const donePoints = calculatePoints('Done');

    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgresPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
    

    if (donePoints >= (inProgresPoints + codeReviewPoints + toDoPoints)) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }

    function calculatePoints(status) {
        return Object.values(board)
        .reduce((acc, curr) => {
            return acc + curr
                .filter((task) => task.status === status)
                .map((t) => t.points)
                .reduce((a, b) => a + b, 0);
            
        }, 0);
    }

    function addNewTask(assignee, taskId, title, status, points) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        board[assignee].push({ taskId, title, status, points: Number(points) });
    }

    function changeTaskStatus(assignee, taskId, newStatus) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        const task = board[assignee].find((task) => task.taskId === taskId);
        if (!task) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            return;
        }
        task.status = newStatus;
      
    }

    function removeTask(assignee, index) {
        index = Number(index);
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        
        if (index < 0 || index >= board[assignee].length) {
            console.log('Index is out of range!');
            return;
        }
        board[assignee].splice(index, 1);
    }
}

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
)