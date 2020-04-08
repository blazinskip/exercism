class Bob {
    hey(sentence: string): string {
        if (Bob.hearsNothing(sentence)) {
            return 'Fine. Be that way!';
        }

        if (Bob.hearsForcefulSentence(sentence)) {
            return 'Whoa, chill out!';
        }

        if (Bob.hearsQuestions(sentence)) {
            return 'Sure.';
        }

        return 'Whatever.';
    }

    private static hearsNothing(sentence: string): boolean {
        return sentence.length === 0 || /^\s*$/.test(sentence);
    }

    private static hearsForcefulSentence(sentence: string): boolean {
        return /[A-Z]/.test(sentence) && sentence === sentence.toUpperCase();
    }

    private static hearsQuestions(sentence: string): boolean {
        return sentence.trim().endsWith('?');
    }
}

export default Bob
