class Bob {
    hey(sentence: string): string {
        if (Bob.isNothing(sentence)) {
            return 'Fine. Be that way!';
        }

        if (Bob.isForcefulSentence(sentence)) {
            return 'Whoa, chill out!';
        }

        if (Bob.isQuestions(sentence)) {
            return 'Sure.';
        }

        return 'Whatever.';
    }

    private static isNothing(sentence: string): boolean {
        return sentence.length === 0 || /^\s*$/.test(sentence);
    }

    private static isForcefulSentence(sentence: string): boolean {
        return /[A-Z]/.test(sentence) && sentence === sentence.toUpperCase();
    }

    private static isQuestions(sentence: string): boolean {
        return sentence.trim().endsWith('?');
    }
}

export default Bob
