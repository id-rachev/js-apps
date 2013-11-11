module("MovingGameObject.init");
test("Test constructor initialization", function () {
    var position = { x: 7, y: 9 },
        size = 7,
        fcolor = "#000",
        scolor = "#000",
        speed = 34,
        direction = 0;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    equal(movingObject.position, position, "Check position");
    equal(movingObject.size, size, "Check size");
    equal(movingObject.fcolor, fcolor, "Check fcolor (fill color)");
    equal(movingObject.scolor, scolor, "Check scolor (stroke color)");
    equal(movingObject.speed, speed, "Check speed");
    equal(movingObject.direction, direction, "Check direction");
});

module("MovingGameObject.move");
test("Test move, negative X (dir = 0)", function () {
    var position = { x: 7, y: 9 },
    size = 7,
    fcolor = "#000",
    scolor = "#000",
    speed = 1,
    direction = 0;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    var expectedPosition = { x: position.x - speed, y: position.y };

    movingObject.move();

    equal(movingObject.position.x, expectedPosition.x, "Check x position");
    equal(movingObject.position.y, expectedPosition.y, "Check y position");
});

test("Test move, positive X (dir = 2)", function () {
    var position = { x: 7, y: 9 },
    size = 7,
    fcolor = "#000",
    scolor = "#000",
    speed = 1,
    direction = 2;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    var expectedPosition = { x: position.x + speed, y: position.y };

    movingObject.move();

    equal(movingObject.position.x, expectedPosition.x, "Check x position");
    equal(movingObject.position.y, expectedPosition.y, "Check y position");
});

test("Test move, negative Y (dir = 1)", function () {
    var position = { x: 7, y: 9 },
    size = 7,
    fcolor = "#000",
    scolor = "#000",
    speed = 1,
    direction = 1;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    var expectedPosition = { x: position.x, y: position.y - speed };

    movingObject.move();

    equal(movingObject.position.x, expectedPosition.x, "Check x position");
    equal(movingObject.position.y, expectedPosition.y, "Check y position");
});

test("Test move, positive Y (dir = 3)", function () {
    var position = { x: 7, y: 9 },
    size = 7,
    fcolor = "#000",
    scolor = "#000",
    speed = 1,
    direction = 3;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    var expectedPosition = { x: position.x, y: position.y + speed };

    movingObject.move();

    equal(movingObject.position.x, expectedPosition.x, "Check x position");
    equal(movingObject.position.y, expectedPosition.y, "Check y position");
});

test("Test move, positive Y, speed = 17", function () {
    var position = { x: 7, y: 9 },
    size = 7,
    fcolor = "#000",
    scolor = "#000",
    speed = 17,
    direction = 3;

    var movingObject = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);

    var expectedPosition = { x: position.x, y: position.y + speed };

    movingObject.move();

    equal(movingObject.position.x, expectedPosition.x, "Check x position");
    equal(movingObject.position.y, expectedPosition.y, "Check y position");
});

module("MovingGameObject.changeDirection");
(function () {
    QUnit.testStart(function () {
        var position = { x: 7, y: 9 }, size = 7, fcolor = "#000",
        scolor = "#000", speed = 1, direction = 0;

        objectDirectionTests = new snakeGame.MovingGameObject(
        position, size, fcolor, scolor, speed, direction);
    });

    var objectDirectionTests;

    test("Test Direction 0 change to 1", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 0;
        var newDirection = 1;

        movingObject.changeDirection(1);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 0 change to 3", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 0;

        var newDirection = 3;

        movingObject.changeDirection(3);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 0 change to 0", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 0;
        var oldDirection = movingObject.direction;
        var newDirection = 0;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });

    test("Test Direction 0 change to 2", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 0;
        var oldDirection = movingObject.direction;

        var newDirection = 2;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });


    test("Test Direction 1 change to 2", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 1;
        var newDirection = 2;

        movingObject.changeDirection(2);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 1 change to 0", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 1;

        var newDirection = 0;

        movingObject.changeDirection(0);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 1 change to 1", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 1;
        var oldDirection = movingObject.direction;
        var newDirection = 1;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });

    test("Test Direction 1 change to 3", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 1;
        var oldDirection = movingObject.direction;

        var newDirection = 3;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });


    test("Test Direction 2 change to 1", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 2;
        var newDirection = 1;

        movingObject.changeDirection(1);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 2 change to 3", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 2;

        var newDirection = 3;

        movingObject.changeDirection(3);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 2 change to 2", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 2;
        var oldDirection = movingObject.direction;
        var newDirection = 2;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });

    test("Test Direction 2 change to 0", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 2;
        var oldDirection = movingObject.direction;

        var newDirection = 0;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });


    test("Test Direction 3 change to 2", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 3;
        var newDirection = 2;

        movingObject.changeDirection(2);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 3 change to 0", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 3;

        var newDirection = 0;

        movingObject.changeDirection(0);

        equal(movingObject.direction, newDirection, "Check change succeed");
    });

    test("Test Direction 3 change to 3", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 3;
        var oldDirection = movingObject.direction;
        var newDirection = 3;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });

    test("Test Direction 3 change to 1", function () {
        var movingObject = objectDirectionTests;
        movingObject.direction = 3;
        var oldDirection = movingObject.direction;

        var newDirection = 1;

        movingObject.changeDirection(newDirection);

        equal(movingObject.direction, oldDirection, "Check no change");
    });
})();