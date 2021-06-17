/*************************************************************************
*Define Custom Blocks
*************************************************************************/
//wait, release, and comment block
Blockly.defineBlocksWithJsonArray([
  
  {
    "type": "comment",
    "message0": "Comment: %1",
    "args0": [
        {
            "type": "field_input",
            "name": "COMMENT",
            "text": ""
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  },
]);

Blockly.JavaScript['comment'] = function (block) {
    var text_comment = block.getFieldValue('COMMENT');
    var code = '// '+ text_comment + '\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "wait",
        "message0": "Go To Sleep",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
      }
]);

Blockly.JavaScript['wait'] = function(block) {
    var code = 'wait_for();\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "release",
        "message0": "Wake Up Other Person",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
      }
]);

Blockly.JavaScript['release'] = function(block) {
    var dropdown_waiter = block.getFieldValue('waiter');
    // TODO: Assemble JavaScript into code variable.
    var code = 'wait_release();\n';
    return code;
  };

Blockly.defineBlocksWithJsonArray([{
    "type": "end_bob",
    "message0": "End",
    "previousStatement": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['end_bob'] = function (block) {
    var code = '\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "end_alice",
    "message0": "End Alice",
    "previousStatement": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['end_bob'] = function (block) {
    var code = '\n';
    return code;
};
Blockly.defineBlocksWithJsonArray([{
    "type": "start_bob",
    "message0": "Start Bob",
    "nextStatement": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['start_bob'] = function (block) {
    var code = 'start_token = "bob";\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "start_alice",
    "message0": "Start Alice",
    "nextStatement": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['start_alice'] = function (block) {
    var code = 'start_token = "alice";\n';
    return code;
};

//movement blocks
Blockly.defineBlocksWithJsonArray([{
    "type": "move_right",
    "message0": "Move Right",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['move_right'] = function (block) {

    var code = 'wait_move_right();\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "move_left",
    "message0": "Move Left",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['move_left'] = function (block) {

    var code = 'wait_move_left();\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "move_up",
    "message0": "Move Up",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['move_up'] = function (block) {
    var code = 'wait_move_up();\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "move_down",
    "message0": "Move Down",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['move_down'] = function (block) {
    var code = 'wait_move_down();\n';
    return code;
};
//Pick Up and Drop Blocks
Blockly.defineBlocksWithJsonArray([{
    "type": "pick_up",
    "message0": "Pick Up %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "right",
                    "RIGHT"
                ],
                [
                    "left",
                    "LEFT"
                ],
                [
                    "above",
                    "TOP"
                ],
                [
                    "below",
                    "BOTTOM"
                ]
            ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['pick_up'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'wait_pick_up("' + dropdown_name + '");\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "set_down",
    "message0": "Place/Use %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "right",
                    "RIGHT"
                ],
                [
                    "left",
                    "LEFT"
                ],
                [
                    "above",
                    "TOP"
                ],
                [
                    "below",
                    "BOTTOM"
                ]
            ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}]);

Blockly.JavaScript['set_down'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = 'wait_set_down("' + dropdown_name + '");\n';
    return code;
};
/*************************************************************************
*Major Variables
*************************************************************************/
//game-level info
var totalRounds = 8;
var round = 1;
var score = 0;

//constants
var global_move_time = 1000;

//round=level info
var alice_wait = 2;
var bob_wait = 1;
var alice_waits_passed = 0;
var bob_waits_passed = 0;
var alice_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bob_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 

var start_token = "";
var min_movements = 0;
var movements_made = 0;

//collision detection
var col_board = [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
                 ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]];

var toolbox = document.getElementById("toolbox");
var custom_cat = document.createElement("category");
custom_cat.setAttribute("name", "movement");
custom_cat.setAttribute("colour", "0");
//creating block elements
var start_alice_element = document.createElement("block");
start_alice_element.setAttribute("type", "start_alice");
var start_bob_element = document.createElement("block");
start_bob_element.setAttribute("type", "start_bob");
var end_alice_element = document.createElement("block");
end_alice_element.setAttribute("type", "end_alice");
var end_bob_element = document.createElement("block");
end_bob_element.setAttribute("type", "end_bob");
var move_right_element = document.createElement("block");
move_right_element.setAttribute("type", "move_right");
var move_left_element = document.createElement("block");
move_left_element.setAttribute("type", "move_left");
var move_up_element = document.createElement("block");
move_up_element.setAttribute("type", "move_up");
var move_down_element = document.createElement("block");
move_down_element.setAttribute("type", "move_down");
var pick_up_element = document.createElement("block");
pick_up_element.setAttribute("type", "pick_up");
var set_down_element = document.createElement("block");
set_down_element.setAttribute("type", "set_down");
var wait_element = document.createElement("block");
wait_element.setAttribute("type", "wait");
var release_element = document.createElement("block");
release_element.setAttribute("type", "release");
var comment_element = document.createElement("block");
comment_element.setAttribute("type", "comment");
//board layout elements
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const inst_canvas = document.getElementById("instructions");
const inst_ctx = inst_canvas.getContext("2d");
inst_ctx.font = "16px sans-serif";
const score_canvas = document.getElementById("score");
const score_ctx = score_canvas.getContext("2d");
score_ctx.font = "16px sans-serif";
var runButton = document.getElementById("run");
var showButton = document.getElementById("show");
var playButton = document.getElementById("play");

//pieces
bob = {
    image: document.getElementById("bob_art"),
    t: 0,
    l: 0,
    l_to: 0,
    t_to: 0,
    char: "b",
    in_hand: ""
};

alice = {
    image: document.getElementById("alice_art"),
    t: 0,
    l: 0,
    t_to: 0,
    l_to: 0,
    char: "a",
    in_hand: ""
};

treasure = {
    image: document.getElementById("treasure_closed_art"),
    t: 0,
    l: 0
};

key = {
    image: document.getElementById("key_art"),
    t: 0,
    l: 0,
    owned: false
};

lock = {
    t: 320,
    l: 0
}

gold = {
    image: document.getElementById("gold_6_art"),
    pieces: 6,
    t: 0,
    l: 0
}

counter_gold = {
    image: document.getElementById("invisible_art"),
    t: 0,
    l: 0,
}
cart = {
    image: document.getElementById("cart_0_art"),
    pieces: 0,
    t: 0,
    l: 0
}
board = document.getElementById("board_art");

function drawProgress() {
    var c = document.getElementById("progress");
    var ctxt = c.getContext("2d");

    ctxt.font = "24px Georgia";
    ctxt.fillStyle = "#C5B783";
    ctxt.fillText("Progress: ", 0, 33);

    for (var r = 1; r <= totalRounds; r++) {
        ctxt.beginPath();
        ctxt.arc(88 + r * 30, 25, 10, 0, 2 * Math.PI);
        ctxt.stroke();
        ctxt.fillStyle = "#C5B783";
        ctxt.fill();

        if (r >= round) {
            ctxt.beginPath();
            ctxt.arc(88 + r * 30, 25, 7, 0, 2 * Math.PI);
            ctxt.stroke();
            ctxt.fillStyle = "#00205B";
            ctxt.fill();
        }
    }
}

/*************************************************************************
*Initialize Code Here
*************************************************************************/
//Inject Blockly
var demoWorkspace = Blockly.inject('blocklyDiv',
    {
        media: 'blockly/media/',
        toolbox: document.getElementById('toolbox')
    });
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);

//toolbox.removeChild(document.getElementsByName("Logic")[0]);
//toolbox.removeChild(document.getElementsByName("Math")[0]);
//toolbox.removeChild(document.getElementsByName("Text")[0]);
//toolbox.removeChild(document.getElementsByName("Loops")[0]);

toolbox.removeChild(document.getElementsByName("Set")[0]);

//Init Toolbox
//toolbox.appendChild(custom_cat);
demoWorkspace.updateToolbox(toolbox);

scoreChange(0);

gainRnd1();
setTimeout(function f(){setRnd1()},  500);
setTimeout(function f(){fill_board()}, 510);
/*************************************************************************
*Round Functions
*setRnd#() is used to set  up the round
*winRnd#Cond() is what checks if someone wins
*gainRnd#() is what blocks they get before the round starts
*************************************************************************/
function gainRnd1() {
    //custom_cat.appendChild(move_right_element);
    //custom_cat.appendChild(start_bob_element);
    //toolbox.appendChild(start_bob_element);
    toolbox.appendChild(move_right_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd1() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 1: Move Bob adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("Hint: Drag blocks to make a program that moves Bob", 10, 50);
    inst_ctx.fillText("", 10, 50);
    board = document.getElementById("board_art");

    bob.l = 0;
    bob.t = 0;
    bob.l_to = 0;
    bob.t_to = 0;
    alice.image = document.getElementById("invisible_art");
    alice.l = 448;
    alice.t = 448;
    alice.l_to = 448;
    alice.t_to = 448;
    treasure.image = document.getElementById("treasure_art");
    treasure.l = 160;
    treasure.t = 32;
    key.image = document.getElementById("key_art");
    key.l = 38;
    key.t = 416;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 5;
    fill_board();

    draw_board();
    drawProgress();
}

function winRnd1Cond() {
    if ((((bob.l_to == treasure.l + 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l - 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t + 32))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t - 32))) 
    ) {
        //inst_ctx.fillText("He got to the treasure! +10pts", 10, 60);
        //scoreChange(10);
        return true;
    } else {
        alert("Bob didn't get to the treasure.\n\n Try again");
        return false;
    }
}

function gainRnd2() {
    //custom_cat.appendChild(start_alice_element);
    //custom_cat.appendChild(move_right_element);
    toolbox.appendChild(start_alice_element);
    toolbox.appendChild(move_right_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd2() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 2: Move Bob and Alice adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("Tip: Make a second program next to Bob's that moves Alice", 10, 50);
    inst_ctx.fillText("", 10, 50);
    board = document.getElementById("board_art");

    bob.l = 0;
    bob.t = 0;
    bob.l_to = 0;
    bob.t_to = 0;
    alice.image = document.getElementById("alice_art");
    alice.l = 0;
    alice.t = 64;
    alice.l_to = 0;
    alice.t_to = 64
    treasure.image = document.getElementById("treasure_art");
    treasure.l = 160;
    treasure.t = 32;
    key.image = document.getElementById("key_art");
    key.l = 38;
    key.t = 416;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 10;

    fill_board();

    draw_board();
    drawProgress();
}

function winRnd2Cond() {
    if ((((bob.l_to == treasure.l + 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l - 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t + 32))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t - 32)))
        && (((alice.l_to == treasure.l + 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l - 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t + 32))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t - 32)))
    ) {
        //inst_ctx.fillText("They got to the treasure! +10pts", 10, 60);
        //scoreChange(10);
        return true;
    } else {
        alert("They didn't get to the treasure.\n\nTry again");
        return false;
    }
}

function gainRnd3() {
    //custom_cat.appendChild(move_up_element);
    toolbox.appendChild(move_up_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd3() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 3: Move Bob and Alice adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("", 10, 50);
    board = document.getElementById("board_art");

    bob.l = 0;
    bob.t = 0;
    bob.l_to = 0;
    bob.t_to = 0;
    alice.image = document.getElementById("alice_art");
    alice.l = 0;
    alice.t = 64;
    alice.l_to = 0;
    alice.t_to = 64
    treasure.image = document.getElementById("treasure_art");
    treasure.l = 160;
    treasure.t = 0;
    key.image = document.getElementById("key_art");
    key.l = 38;
    key.t = 416;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 10;
    fill_board();

    draw_board();
    drawProgress();
}

function winRnd3Cond() {
    if ((((bob.l_to == treasure.l + 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l - 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t + 32))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t - 32)))
        && (((alice.l_to == treasure.l + 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l - 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t + 32))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t - 32)))
    ) {
        //inst_ctx.fillText("They got to the treasure! +10pts", 10, 60);
        //scoreChange(10);
        return true;
    } else {
        alert("They didn't get to the treasure.\n\nTry again");
        return false;
    }
}

function gainRnd4() {
    //custom_cat.appendChild(pick_up_element);
    //custom_cat.appendChild(set_down_element);
    toolbox.appendChild(pick_up_element);
    toolbox.appendChild(set_down_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd4() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 4: Move Bob and Alice adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("Hint: Chest must be opened by key first", 10, 50);
    board = document.getElementById("board_art");

    bob.l = 0;
    bob.t = 64;
    bob.l_to = 0;
    bob.t_to = 64;
    alice.image = document.getElementById("alice_art");
    alice.l = 0;
    alice.t = 128;
    alice.l_to = 0;
    alice.t_to = 128;
    treasure.image = document.getElementById("treasure_closed_art");
    treasure.l = 160;
    treasure.t = 64;
    key.image = document.getElementById("key_art");
    key.l = 64;
    key.t = 160;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 10;

    fill_board();

    draw_board();
    drawProgress();
}

function winRnd4Cond() {
    if ((((bob.l_to == treasure.l + 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l - 32) && (bob.t_to == treasure.t))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t + 32))
        || ((bob.l_to == treasure.l) && (bob.t_to == treasure.t - 32)))
        && (((alice.l_to == treasure.l + 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l - 32) && (alice.t_to == treasure.t))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t + 32))
            || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t - 32)))
        && treasure.image == document.getElementById("treasure_art")) {
        //inst_ctx.fillText("They got to the treasure! +10pts", 10, 80);
        //scoreChange(10);
        return true;
    } else {
        alert("They didn't get to the treasure. \n\nTry again");
        return false;
    }
}

function setRnd5() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 5: Move Alice adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("Hint: Pass things on the counters", 10, 50);
    board = document.getElementById("two_rooms_art");

    

    bob.l = 32;
    bob.t = 192;
    bob.l_to = 32;
    bob.t_to = 192;
    alice.image = document.getElementById("alice_art");
    alice.l = 320;
    alice.t = 192;
    alice.l_to = 320;
    alice.t_to = 192;
    treasure.image = document.getElementById("treasure_closed_art");
    treasure.l = 256;
    treasure.t = 256;
    key.image = document.getElementById("key_art");
    key.l = 64;
    key.t = 160;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 10;

    fill_board();
    col_board[0][[5]] = "x";
    col_board[1][[5]] = "x";
    col_board[2][[5]] = "x";
    col_board[3][[5]] = "x";
    col_board[4][[5]] = "x";
    col_board[5][[5]] = "x";
    col_board[6][[5]] = "y";
    col_board[7][[5]] = "x";
    col_board[8][[5]] = "y";
    col_board[9][[5]] = "x";
    col_board[10][[5]] = "x";
    col_board[11][[5]] = "x";
    draw_board();
    drawProgress();
}

function winRnd5Cond() {
    if ((((alice.l_to == treasure.l + 32) && (alice.t_to == treasure.t))
        || ((alice.l_to == treasure.l - 32) && (alice.t_to == treasure.t))
        || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t + 32))
        || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t - 32)))
        && treasure.image == document.getElementById("treasure_art")) {
        //inst_ctx.fillText("Alice got to the treasure! +10pts", 10, 80);
        //scoreChange(10);
        return true;
    } else {
        alert("Alice didn't get to the treasure. \n\nTry again");
        return false;
    }
}

function gainRnd5() {
    //custom_cat.appendChild(move_left_element);
    //custom_cat.appendChild(move_down_element);
    //custom_cat.appendChild(pick_up_element);
    //custom_cat.appendChild(set_down_element);
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);

    toolbox.appendChild(move_left_element);
    toolbox.appendChild(move_down_element);
    toolbox.appendChild(pick_up_element);
    toolbox.appendChild(set_down_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd6() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 6: Move Alice adjacent to the Treasure", 10, 30);
    inst_ctx.fillText("Hint: Alice might beat Bob to the Counter. Use a wait/release pair", 10, 50);
    board = document.getElementById("two_rooms_art");

    bob.l = 32;
    bob.t = 128;
    bob.l_to = 32;
    bob.t_to = 128;
    alice.image = document.getElementById("alice_art");
    alice.l = 320;
    alice.t = 192;
    alice.l_to = 320;
    alice.t_to = 192;
    treasure.image = document.getElementById("treasure_closed_art");
    treasure.l = 256;
    treasure.t = 256;
    key.image = document.getElementById("key_art");
    key.l = 64;
    key.t = 160;
    gold.image = document.getElementById("invisible_art");
    gold.pieces = 0;
    gold.l = 0;
    gold.t = 416;
    cart.l = 416;
    cart.t = 256;
    min_movements = 12;

    fill_board();
    col_board[0][[5]] = "x";
    col_board[1][[5]] = "x";
    col_board[2][[5]] = "x";
    col_board[3][[5]] = "x";
    col_board[4][[5]] = "x";
    col_board[5][[5]] = "x";
    col_board[6][[5]] = "y";
    col_board[7][[5]] = "x";
    col_board[8][[5]] = "y";
    col_board[9][[5]] = "x";
    col_board[10][[5]] = "x";
    col_board[11][[5]] = "x";
    draw_board();
    drawProgress();
}

function winRnd6Cond() {
    if ((((alice.l_to == treasure.l + 32) && (alice.t_to == treasure.t))
        || ((alice.l_to == treasure.l - 32) && (alice.t_to == treasure.t))
        || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t + 32))
        || ((alice.l_to == treasure.l) && (alice.t_to == treasure.t - 32)))
        && treasure.image == document.getElementById("treasure_art")) {
        //inst_ctx.fillText("Alice got to the treasure! +10pts", 10, 80);
        //scoreChange(10);
        return true;
    } else {
        alert("Alice didn't get to the treasure.  \n\nTry again");
        return false;
    }
}

function gainRnd6() {
    //custom_cat.appendChild(wait_element);
    //custom_cat.appendChild(release_element);
    toolbox.appendChild(wait_element);
    toolbox.appendChild(release_element);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd7() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Round 7: Steal the Gold and place on the cart.", 10, 30);
    inst_ctx.fillText("Hint: Pass things on the counters", 10, 50);
    board = document.getElementById("bank_closed_art");

    

    counter_gold.l = 0;
    counter_gold.t = 0;
    counter_gold.image = document.getElementById("invisible_art");
    bob.l = 256;
    bob.t = 256;
    bob.l_to = 256;
    bob.t_to = 256;
    alice.image = document.getElementById("alice_art");
    alice.l = 0;
    alice.t = 256;
    alice.l_to = 0;
    alice.t_to = 256;
    treasure.image = document.getElementById("invisible_art");
    treasure.l = 160;
    treasure.t = 0;
    key.image = document.getElementById("key_art");
    key.l = 224;
    key.t = 224;
    gold.image = document.getElementById("gold_6_art");
    gold.pieces = 6;
    gold.l = 0;
    gold.t = 352;
    cart.image = document.getElementById("cart_0_art");
    cart.l = 320;
    cart.t = 256;
    min_movements = 21;


    fill_board();
    col_board[6][[0]] = "x";
    col_board[6][[1]] = "x";
    col_board[6][[2]] = "x";
    col_board[6][[3]] = "x";
    col_board[6][[4]] = "x";
    col_board[6][[5]] = "x";
    col_board[7][[5]] = "x";
    col_board[8][[5]] = "y";
    col_board[9][[5]] = "y";
    col_board[10][[5]] = "y";
    col_board[11][[5]] = "x";
    col_board[10][0] = "x";
    col_board[10][1] = "x";
    col_board[11][0] = "g";
    col_board[11][1] = "x";
    draw_board();
    drawProgress();
}

function winRnd7Cond() {
    if (cart.image == cart_6_art) {
        //inst_ctx.fillText("You stole the gold! +10pts.", 10, 80);
        //scoreChange(10);
        return true;
    } else {
        alert("You didn't steal the gold. \n\nTry again.");
        return false;
    }
}

function gainRnd7() {
    //custom_cat.appendChild(end_bob_element);
    //custom_cat.appendChild(end_alice_element);
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);
    demoWorkspace.updateToolbox(toolbox);
}

function setRnd8() {
    inst_ctx.clearRect(0, 0, inst_canvas.width, inst_canvas.height);
    inst_ctx.fillText("Dev Round: Try to Break the Game", 10, 30);
    inst_ctx.fillText("", 10, 50);
    board = document.getElementById("bank_closed_art");

    counter_gold.l = 0;
    counter_gold.t = 0;
    counter_gold.image = document.getElementById("invisible_art");
    bob.l = 0;
    bob.t = 0;
    bob.l_to = 0;
    bob.t_to = 0;
    alice.image = document.getElementById("alice_art");
    alice.l = 0;
    alice.t = 64;
    alice.l_to = 0;
    alice.t_to = 64
    treasure.image = document.getElementById("invisible_art");
    treasure.l = 416;
    treasure.t = 0;
    key.image = document.getElementById("key_art");
    key.l = 224;
    key.t = 224;
    gold.image = document.getElementById("gold_6_art");
    gold.pieces = 6;
    gold.l = 0;
    gold.t = 416;
    cart.image = document.getElementById("cart_0_art");
    cart.l = 320;
    cart.t = 256;
    min_movements = 25;


    fill_board();
    col_board[6][[0]] = "x";
    col_board[6][[1]] = "x";
    col_board[6][[2]] = "x";
    col_board[6][[3]] = "x";
    col_board[6][[4]] = "x";
    col_board[6][[5]] = "x";
    col_board[7][[5]] = "x";
    col_board[8][[5]] = "y";
    col_board[9][[5]] = "y";
    col_board[10][[5]] = "y";
    col_board[11][[5]] = "x";
    col_board[10][0] = "x";
    col_board[10][1] = "x";
    col_board[11][0] = "g";
    col_board[11][1] = "x";
    draw_board();
    drawProgress();
}


function winRnd8Cond() {
    return false;
}

function gainRnd8() {
    //custom_cat.appendChild(comment_element);
    toolbox.appendChild(comment_element);
    demoWorkspace.updateToolbox(toolbox);
}

/*************************************************************************
*Game Functions
*************************************************************************/
//*****Play Button Functions*****/
function set_play_button() {
    var inner = document.getElementById("buttons");
    inner.innerHTML = "<input id=\"play\" type=\"image\" src=\"artwork/run.png\" width=\"250\" onclick=\"play()\" />";
}

function set_running_button() {
    var inner = document.getElementById("buttons");
    inner.innerHTML = "<input id=\"play\" type=\"image\" src=\"artwork/running.png\" width=\"250\" />";
}

function play() {
    set_running_button();
    runCode();
    checkWin();

}

function set_reset_button() {
    var inner = document.getElementById("buttons");
    inner.innerHTML = "<input id=\"play\" type=\"image\" src=\"artwork/reset.png\" width=\"250\" onclick=\"reset()\" />";
}

function reset() {
    alice.in_hand = "";
    bob.in_hand = "";
    bob_wait = 1;
    alice_wait = 2;
    start_token = "";
    bob.image = document.getElementById("bob_art");
    alice.image = document.getElementById("alice_art");
    key.image = document.getElementById("key_art");
    key.owned = false;
    treasure.image = document.getElementById("treasure_closed_art");
    board = document.getElementById("board_art");
    alice_waits_passed = 0;
    bob_waits_passed = 0;
    movements_made = 0;
    if (round == 1) { setRnd1(); }
    if (round == 2) { setRnd2(); }
    if (round == 3) { setRnd3(); }
    if (round == 4) { setRnd4(); }
    if (round == 5) { setRnd5(); }
    if (round == 6) { setRnd6(); }
    if (round == 7) { setRnd7(); }
    if (round == 8) { setRnd8(); }
    if (round == 9) { setRnd9(); }
    if (round == 10) { setRnd10(); }
    set_play_button();
    draw_board();
}

function set_next_button() {
    var inner = document.getElementById("buttons");
    inner.innerHTML = "<input id=\"play\" type=\"image\" src=\"artwork/next.png\" width=\"250\" onclick=\"next()\" />";
}

function next() {
    round = round + 1;
    if (round == 2) {
        setRnd2();
        gainRnd2();
    } else if (round == 3) {
        setRnd3();
        gainRnd3();
    } else if (round == 4) {
        setRnd4();
        gainRnd4();
    } else if (round == 5) {
        setRnd5();
        gainRnd5();
    } else if (round == 6) {
        setRnd6();
        gainRnd6();
    } else if (round == 7) {
        setRnd7();
        gainRnd7();
    } else if (round == 8) {
        setRnd8();
        gainRnd8();
    } else if (round == 9) {
        setRnd9();
        gainRnd9();
    } else if (round == 10) {
        setRnd10();
        gainRnd10();
    }
    bob_wait = 1;
    alice_wait = 2;
    movements_made = 0;
    start_token = "";
    set_play_button();
}

function set_end_button(){
    var inner = document.getElementById("buttons");
    inner.HTML = "<input id=\"play\" type=\"image\" src=\"\" width=\"250\" onclick=\"\" />";
}

//*****Etc Helper Functions*****/

function checkWin() {
    setTimeout(function f() {
        var won = false;
        if (round == 1) { won = winRnd1Cond(); }
        if (round == 2) { won = winRnd2Cond(); }
        if (round == 3) { won = winRnd3Cond(); }
        if (round == 4) { won = winRnd4Cond(); }
        if (round == 5) { won = winRnd5Cond(); }
        if (round == 6) { won = winRnd6Cond(); }
        if (round == 7) { won = winRnd7Cond(); }
        if (round == 8) { won = winRnd8Cond(); }
        if (round == 9) { won = winRnd9Cond(); }
        if (round == 10) { won = winRnd10Cond(); }
        if (won) {
            winPopUp();
        } else {
            set_reset_button();
        }
    }, Math.max(bob_wait, alice_wait));
}

function draw_board() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(board, 0, 0);
    ctx.drawImage(bob.image, bob.l, bob.t);
    ctx.drawImage(alice.image, alice.l, alice.t);
    ctx.drawImage(key.image, key.l, key.t);
    ctx.drawImage(treasure.image, treasure.l, treasure.t);
    ctx.drawImage(gold.image, gold.l, gold.t);
    ctx.drawImage(cart.image, cart.l, cart.t);
    ctx.drawImage(counter_gold.image, counter_gold.l, counter_gold.t);
}

function winPopUp() {
    usr_prompt = "You Completed the Round";
    if (min_movements >= movements_made) {
        usr_prompt+="! +100pts\n";
        alert(usr_prompt);
        scoreChange(100);
        if(round != 7){
            set_next_button();
        }else{
            set_end_button();
        }
    } else {
        usr_prompt += "...\n\n...But you used " + (movements_made-min_movements) + " more movement blocks than you needed to.\n";
        usr_prompt += "You scored " + (100 - (10 * (movements_made - min_movements))) + " points!\n\n";
        usr_prompt += "Would you like to advance?\n";
        usr_prompt += "Ok:   Go to next round\nCancel:   Replay this round to try for 100 points.";
        var result = window.confirm(usr_prompt);
        if (result) {
            scoreChange(100 - (10 * (movements_made - min_movements)));
            if(round != 7){
                set_next_button();
            }else{
                set_end_button();
            }
        } else {
            set_reset_button();
        }
    }

    if (round == 7) {
        alert('You have completed the game. Click "ok" to complete survey.\n\nMake Sure Pop-ups are enabled.');
        window.open('https://forms.gle/XUf8uGMgq6DDDhgw5');
    }
}

function scoreChange(ammount) {
    if (score + ammount >= 0) {
        score += ammount;
    }
    score_concat = "Score: " + score;
    score_ctx.clearRect(0, 0, score_canvas.width, score_canvas.height);
    score_ctx.font = "24px Georgia";
    score_ctx.fillStyle = "#C5B783";
    score_ctx.fillText(score_concat, 10, 33);

    if (ammount < 0) {
        change = "(" + ammount + ")";
        score_ctx.fillStyle = "red";
        score_ctx.fillText(change, 130, 33);
    } else if (ammount > 0) {
        change = "(+" + ammount + ")";
        score_ctx.fillStyle = "green";
        score_ctx.fillText(change, 130, 33);
    }
}

//*****collision Detection Functions*****
function fill_board(){
    //clear board
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            col_board[j][i] = "_";
        }
    }
    //set pieces
    if((bob.t/32 < 12) && (bob.l/32 < 12)) col_board[bob.t/32][bob.l/32] = "b";
    else console.log("Bob not on board");
    if((alice.t/32 < 12) && (alice.l/32 < 12)) col_board[alice.t/32][alice.l/32] = "a";
    else console.log("Alice not on board");
    if((treasure.t/32 < 12) && (treasure.l/32 < 12)) col_board[treasure.t/32][treasure.l/32] = "t"
    else console.log("Treasure not on board");
    if((cart.t/32 < 12) && (cart.l/32 < 12)) col_board[cart.t/32][cart.l/32] = "c"
    else console.log("Cart not on board");
    if((gold.t/32 < 12) && (gold.l/32 < 12)) col_board[gold.t/32][gold.l/32] = "g"
    else console.log("Gold not on board");
}

function spot_contents(loc_t, loc_l){
    return col_board[loc_t/32][loc_l/32];
}

function print() {
    var ptemp = "";
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            ptemp += col_board[i][j] + ",";
        }
        ptemp += "\n"
    }
    alert(ptemp);
}

//*****Piece Movement Functions*****/
function wait_for(){
    if(start_token == "bob"){
        if(bob_release_times[bob_waits_passed] > bob_wait){
            bob_wait = bob_release_times[bob_waits_passed];
        }
       bob_waits_passed++;
    } else if (start_token == "alice"){
        if(alice_release_times[alice_waits_passed] > alice_wait){
            alice_wait = alice_release_times[alice_waits_passed];
        }
        alice_waits_passed++;
    }
}

function wait_release(){
    
}

function wait_move_right() {
    if (start_token == "bob") {
        setTimeout(function () { move_right(bob) }, bob_wait);
        bob_wait += global_move_time;
    } else if (start_token == "alice") {
        setTimeout(function () { move_right(alice) }, alice_wait);
        alice_wait += global_move_time;
    }
}

function wait_move_left() {
    if (start_token == "bob") {
        setTimeout(function () { move_left(bob) }, bob_wait);
        bob_wait += global_move_time;
    } else if (start_token == "alice") {
        setTimeout(function () { move_left(alice) }, alice_wait);
        alice_wait += global_move_time;
    }
}

function wait_move_up() {
    if (start_token == "bob") {
        setTimeout(function () { move_up(bob) }, bob_wait);
        bob_wait += global_move_time;
    } else if (start_token == "alice") {
        setTimeout(function () { move_up(alice) }, alice_wait);
        alice_wait += global_move_time;
    }
}

function wait_move_down() {
    if (start_token == "bob") {
        setTimeout(function () { move_down(bob) }, bob_wait);
        bob_wait += global_move_time;
    } else if (start_token == "alice") {
        setTimeout(function () { move_down(alice) }, alice_wait);
        alice_wait += global_move_time;
    }
}

function wait_pick_up(direction) {
    if (start_token == "bob") {
        setTimeout(function () { pick_up(bob, direction) }, bob_wait + 100);
        bob_wait += 200;
    } else if (start_token == "alice") {
        setTimeout(function () { pick_up(alice, direction) }, alice_wait + 100);
        alice_wait += 200;
    }
}

function wait_set_down(direction) {
    if (start_token == "bob") {
        setTimeout(function () { set_down(bob, direction) }, bob_wait + 100);
        bob_wait += 200;
    } else if (start_token == "alice") {
        setTimeout(function () { set_down(alice, direction) }, alice_wait + 100);
        alice_wait += 200;
    }
}

function move_right(piece) {
    if ((piece.l < canvas.width - 32) && (spot_contents(piece.t, piece.l+32) == "_")) {
        piece.l_to = piece.l_to + 32;
        col_board[piece.t/32][(piece.l/32)+1] = piece.char;
        movements_made += 1;
        window.requestAnimationFrame(function right_move() {
            if (piece.l < piece.l_to) {
                piece.l++;
                draw_board();
                window.requestAnimationFrame(right_move);
            }else{
                col_board[piece.t/32][(piece.l/32)-1] = "_";
            }
        });
    }
    draw_board();
}

function move_left(piece) {
    if ((piece.l > 0) && (spot_contents(piece.t, piece.l - 32) == "_")) {
        piece.l_to = piece.l_to - 32;
        col_board[piece.t/32][(piece.l/32)-1] = piece.char;
        movements_made += 1;
        window.requestAnimationFrame(function left_move() {
            if (piece.l > piece.l_to) {
                piece.l--;
                draw_board();
                window.requestAnimationFrame(left_move);
            }else{
                col_board[piece.t/32][(piece.l/32)+1] = "_";
            }
        });
    }
    draw_board();
}


function move_up(piece) {
    if ((piece.t > 0) && (spot_contents(piece.t -32, piece.l) == "_")) {
        piece.t_to = piece.t_to - 32;
        col_board[(piece.t/32)-1][(piece.l/32)] = piece.char;
        movements_made += 1;
        window.requestAnimationFrame(function up_move() {
            if (piece.t > piece.t_to) {
                piece.t--;
                draw_board();
                window.requestAnimationFrame(up_move);
            }else{
                col_board[(piece.t/32)+1][(piece.l/32)] = "_";
            }
        });
    }
    draw_board();
}

function move_down(piece) {
    if ((piece.t < canvas.height - 32) && (spot_contents(piece.t+32, piece.l) == "_")) {
        piece.t_to = piece.t_to + 32;
        col_board[(piece.t/32)+1][(piece.l/32)] = piece.char;
        movements_made += 1;
        window.requestAnimationFrame(function down_move() {
            if (piece.t < piece.t_to) {
                piece.t++;
                draw_board();
                window.requestAnimationFrame(down_move);
            }else{
                col_board[(piece.t/32)-1][(piece.l/32)] = "_";
            }
        });
    }
    draw_board();
}

function pick_up(piece, direction) {
    var loc_l = piece.l;
    var loc_t = piece.t;
    if (direction == "BOTTOM") loc_t = piece.t + 32;
    if (direction == "TOP") loc_t = piece.t - 32;
    if (direction == "LEFT") loc_l = piece.l - 32;
    if (direction == "RIGHT") loc_l = piece.l + 32;
    if ((loc_t == key.t) && (loc_l == key.l) && !key.owned && (piece.in_hand == "")) {
        key.owned = true;
        key.image = document.getElementById("invisible_art");
        piece.in_hand = "key";
        if (piece.image == bob_art) piece.image = document.getElementById("bob_key_art");
        if (piece.image == alice_art) piece.image = document.getElementById("alice_key_art");
    }
    if ((loc_t == gold.t) && (loc_l == gold.l) && (piece.in_hand == "") && (gold.pieces > 0)) {
        console.log("got gold")
        // if(gold.image == gold_6_art) gold.image = document.getElementById("gold_5_art");
        // else if(gold.image == gold_5_art) gold.image = document.getElementById("gold_4_art");
        // else if(gold.image == gold_4_art) gold.image = document.getElementById("gold_3_art");
        // else if(gold.image == gold_3_art) gold.image = document.getElementById("gold_2_art");
        // else if(gold.image == gold_2_art) gold.image = document.getElementById("gold_1_art");
        // else if(gold.image == gold_1_art) gold.image = document.getElementById("gold_0_art");
        // gold.piece = gold.piece - 1;
        if (gold.image == gold_6_art) gold.image = document.getElementById("gold_0_art");
        gold.piece = gold.piece - 6;
        piece.in_hand = "gold";
        if (piece.image == bob_art) piece.image = document.getElementById("bob_gold_art");
        if (piece.image == alice_art) piece.image = document.getElementById("alice_gold_art");
    }
    draw_board();
    if((counter_gold.l == loc_l) && (counter_gold.t == loc_t)){
        if (piece.image == bob_art) piece.image = document.getElementById("bob_gold_art");
        if (piece.image == alice_art) piece.image = document.getElementById("alice_gold_art");
        piece.in_hand = "gold";
        counter_gold.image = document.getElementById("invisible_art");
    }
}

function set_down(piece, direction) {
    var loc_l = piece.l;
    var loc_t = piece.t;
    if (direction == "BOTTOM") loc_t = piece.t + 32;
    if (direction == "TOP") loc_t = piece.t - 32;
    if (direction == "LEFT") loc_l = piece.l - 32;
    if (direction == "RIGHT") loc_l = piece.l + 32;
    if (piece.in_hand == "key") {
        key.t = loc_t;
        key.l = loc_l;
        key.image = document.getElementById("key_art");
        if ((key.t == lock.t) && (key.l == lock.l)) {
            unlock();
        }
        if ((treasure.t == key.t) && (treasure.l == key.l) && (treasure.image = document.getElementById("treasure_closed_art"))) {
            key.image = document.getElementById("invisible_art");
            treasure.image = document.getElementById("treasure_art");
        }
        key.owned = false;
        piece.in_hand = "";
        if (piece.image == bob_key_art) piece.image = document.getElementById("bob_art");
        if (piece.image == alice_key_art) piece.image = document.getElementById("alice_art");
    }
    if (piece.in_hand == "gold") {
        if((loc_l == 160) && ((loc_t == 256) || (loc_t == 288) || (loc_t == 320))){
            counter_gold.image = document.getElementById("counter_gold_art");
            counter_gold.t = loc_t;
            counter_gold.l = loc_l;
            if (piece.image == bob_gold_art) piece.image = document.getElementById("bob_art");
        if (piece.image == alice_gold_art) piece.image = document.getElementById("alice_art");
        }
        if((loc_l == cart.l) && (loc_t == cart.t)){
            cart.image = document.getElementById("cart_6_art");
            if (piece.image == bob_gold_art) piece.image = document.getElementById("bob_art");
            if (piece.image == alice_gold_art) piece.image = document.getElementById("alice_art");
        }
    }
    draw_board();
}

function unlock() {
    if (board == bank_closed_art) {
        board = document.getElementById("bank_open_art");
        col_board[10][0] = "_";
        key.image = document.getElementById("invisible_art");
        key.owned = true;
        draw_board();
    }
}

//*****Developer Box Functions*****/
function dev_round(){
    while(round < 8){
        next();
    }
}

function all_blocks(){
    toolbox.appendChild(start_alice_element);
    toolbox.appendChild(move_right_element);
    toolbox.appendChild(move_left_element);
    toolbox.appendChild(move_up_element);
    toolbox.appendChild(move_down_element);
    toolbox.appendChild(pick_up_element);
    toolbox.appendChild(set_down_element);
    toolbox.appendChild(wait_element);
    toolbox.appendChild(release_element);
    toolbox.appendChild(comment_element);
    demoWorkspace.updateToolbox(toolbox);
}

function showCode() {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = "/*******************************\n";
    code = code + "*HELPUS Javascript Output: Round " + round + "\n";
    code = code + "*MIDN Matthew Friedel\n"
    code = code + "*******************************/\n\n"
    code = code + "var bob_l = " + (bob.l/32) + ";\n";
    code = code + "var bob_t = " + (bob.t/32) + ";\n";
    code = code + "var alice_l = " + (alice.l/32) + ";\n";
    code = code + "var alice_t = " + (alice.t/32) + ";\n\n";
    code = code + Blockly.JavaScript.workspaceToCode(demoWorkspace);
    alert(code);
}

function clearProgram(){
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);
}

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    
    var bob_pointer = -1;
    var alice_pointer = -1;
    var bob_end = -1;
    var alice_end = -1;
    //set beginning pointer
    for(var i =0; i< code.length; i++){
        if(code.slice(i, i+20) == 'start_token = "bob";'){
            bob_pointer = i;
        }
        if(code.slice(i, i+21) == 'start_token = "alice"'){
            alice_pointer = i;
        }
    }

    //set ending pointer
    if(bob_pointer == 0){
        bob_end = alice_pointer - 1;
        alice_end = code.length - 1;
    }else if(alice_pointer == 0){
        alice_end = bob_pointer - 1;
        bob_end = code.length - 1;
    }

    //alert("Bob: " + bob_pointer + "-" + bob_end + " Alice: " + alice_pointer + "-" + alice_end + "Total: " + code.length);
    
    //output
    var num_alice_releases = 0;
    var num_bob_releases = 0;
    alice_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    bob_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var temp_alice_wait = 2;
    var temp_bob_wait = 1;

    var temp_alice_waits_encountered = 0;
    var temp_bob_waits_encountered = 0;

    var bob_change = true;
    var alice_change = true;

    var trs = 1;
    //advance through code until algorithm finishes or is caught in an error loop
    while(bob_change == true || alice_change == true){
        bob_change = false;
        var bob_advance = true;
        //parse through bob code
        while(bob_advance && (bob_pointer <= bob_end)){
            //deal with static commands
            if(code.slice(bob_pointer, bob_pointer+10) == "wait_move_"){
                console.log("bob move at " + temp_bob_wait);
                temp_bob_wait += global_move_time;
                bob_change = true;
            }
            if(code.slice(bob_pointer, bob_pointer+10) == "wait_pick_"){
                console.log("bob pick up at " + temp_bob_wait);
                temp_bob_wait += 200;
                bob_change = true;
            }
            if(code.slice(bob_pointer, bob_pointer+10) == "wait_set_d"){
                console.log("bob set down at " + temp_bob_wait);
                temp_bob_wait += 200;
                bob_change = true;
            }

            //deal with releases
            if(code.slice(bob_pointer, bob_pointer+10) == 'release();'){
                console.log("bob releases alice at " + temp_bob_wait);
                alice_release_times[num_alice_releases] = temp_bob_wait;
                num_alice_releases += 1;
                bob_change = true;
            }

            //deal with waits
            if(code.slice(bob_pointer, bob_pointer+11) == 'wait_for();'){
                if(bob_release_times[temp_bob_waits_encountered] != 0){
                    if(bob_release_times[temp_bob_waits_encountered] > temp_bob_wait){
                        temp_bob_wait = bob_release_times[temp_bob_waits_encountered];
                    }
                    temp_bob_waits_encountered += 1;
                    console.log("Bob waits until " + temp_bob_wait);
                    bob_change = true;
                }else{
                    bob_advance = false;
                }
            }

            //console.log(bob_pointer);
            if(bob_advance) bob_pointer = bob_pointer + 1;
            
        }
        
        
        alice_change = false;
        var alice_advance = true;
        //parse through alice code
        while(alice_advance && (alice_pointer <= alice_end)){
            //deal with static commands
            if(code.slice(alice_pointer, alice_pointer+10) == "wait_move_"){
                console.log("alice move at " + temp_alice_wait);
                temp_alice_wait += global_move_time;
                alice_change = true;
            }
            if(code.slice(alice_pointer, alice_pointer+10) == "wait_pick_"){
                console.log("alice pick up at " + temp_alice_wait);
                temp_alice_wait += 200;
                alice_change = true;
            }
            if(code.slice(alice_pointer, alice_pointer+10) == "wait_set_d"){
                console.log("alice set down at " + temp_alice_wait);
                temp_alice_wait += 200;
                alice_change = true;
            }

            //deal with releases
            if(code.slice(alice_pointer, alice_pointer+10) == 'release();'){
                console.log("alice releases bob at " + temp_alice_wait);
                bob_release_times[num_bob_releases] = temp_alice_wait;
                num_bob_releases += 1;
                alice_change = true;
            }

            //deal with waits
            if(code.slice(alice_pointer, alice_pointer+11) == 'wait_for();'){
                if(alice_release_times[temp_alice_waits_encountered] != 0){
                    if(alice_release_times[temp_alice_waits_encountered] > temp_alice_wait){
                        temp_alice_wait = alice_release_times[temp_alice_waits_encountered];
                    }
                    temp_alice_waits_encountered += 1;
                    console.log("Alice waits until " + temp_alice_wait);
                    alice_change = true;
                }else{
                    alice_advance = false;
                }
            }
            //console.log(alice_pointer);
            if(alice_advance) alice_pointer = alice_pointer + 1;
        }
        console.log(bob_change + " " + trs);
        trs++;

    }

    console.log("Alice: " + alice_release_times);
    console.log("Bob: " + bob_release_times);

    /*Parse through code. Figure out Wait and Release Times
    var num_alice_releases = 0;
    var num_bob_releases = 0;
    var temp_alice_wait = alice_wait;
    var temp_bob_wait = bob_wait;
    alice_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    bob_release_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(var i = 0; i < code.length; i++){
        if(code.slice(i, i+7) == 'release'){
          var temp_releasing = code.slice(i+9, i+10);
          if(temp_releasing == "A"){
            alice_release_times[num_alice_releases] = temp_alice_wait;
            num_alice_releases++;
          }else if(temp_releasing == "B"){
            bob_release_times[num_bob_releases] = temp_bob_wait;
            num_bob_releases++;
          }
        }
        else if(code.slice(i, i+8 )){
            //TODO: Assign values here.
        }
    }*/
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}