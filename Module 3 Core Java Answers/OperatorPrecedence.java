public class OperatorPrecedence {

    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        System.out.println("Result of 10 + 5 * 2: " + result1);

        int result2 = (10 + 5) * 2;
        System.out.println("Result of (10 + 5) * 2: " + result2);

        double result3 = 20.0 / 4 - 2 + 3 * 2.5;
        System.out.println("Result of 20.0 / 4 - 2 + 3 * 2.5: " + result3);

        boolean result4 = 5 > 3 && 10 < 20 || 7 == 7;
        System.out.println("Result of 5 > 3 && 10 < 20 || 7 == 7: " + result4);

        int a = 10;
        int b = 3;
        int result5 = a % b + a / b;
        System.out.println("Result of a % b + a / b (where a=10, b=3): " + result5);
    }
}