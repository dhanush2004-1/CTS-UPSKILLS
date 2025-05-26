public class MethodOverloading {

    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        int sumInt1 = add(5, 10);
        System.out.println("Sum of two integers (5, 10): " + sumInt1);

        double sumDouble1 = add(3.5, 2.7);
        System.out.println("Sum of two doubles (3.5, 2.7): " + sumDouble1);

        int sumInt2 = add(1, 2, 3);
        System.out.println("Sum of three integers (1, 2, 3): " + sumInt2);
    }
}