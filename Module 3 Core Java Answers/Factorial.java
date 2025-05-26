import java.util.Scanner;

public class Factorial{

    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter a non-negative integer: ");

        if (inputScanner.hasNextInt()) {
            int number = inputScanner.nextInt();

            if (number < 0) {
                System.out.println("Factorial is not defined for negative numbers.");
            } else {
                long factorial = 1;
                for (int i = 1; i <= number; i++) {
                    factorial *= i;
                }
                System.out.println("The factorial of " + number + " is: " + factorial);
            }
        } else {
            System.out.println("Invalid input. Please enter a non-negative integer.");
        }

        inputScanner.close();
    }
}