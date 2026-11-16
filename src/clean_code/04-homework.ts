
(() => {

    // Check if a fruit is red
    function isFruitRed(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'fresa'];

        return redFruits.includes(fruit);
    }

    // Get fruits according to their color
    function getFruits(color: string): string[] {

        const fruitsByColor: { [key: string]: string[] } = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['blackberries', 'grapes']
        };

        if (!fruitsByColor[color]) {
            throw Error('The color must be: red, yellow or purple');
        }

        return fruitsByColor[color];
    }

    // Process states
    let firstProcess = true;
    let secondProcess = true;
    let thirdProcess = true;
    let fourthProcess = true;

    // Check if all processes are working
    function checkProcesses(): string {

        if (!firstProcess) return 'First process is broken.';
        if (!secondProcess) return 'Second process is broken.';
        if (!thirdProcess) return 'Third process is broken.';
        if (!fourthProcess) return 'Fourth process is broken.';

        return 'All processes are working properly!';
    }

    // isFruitRed
    console.log({
        result: isFruitRed('cereza'),
        fruit: 'cereza'
    });

    console.log({
        result: isFruitRed('piña'),
        fruit: 'piña'
    });

    // getFruits
    console.log({ redFruits: getFruits('red') });
    console.log({ yellowFruits: getFruits('yellow') });
    console.log({ purpleFruits: getFruits('purple') });

    // checkProcesses
    console.log({ status: checkProcesses() });

})();
