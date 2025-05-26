import java.util.Scanner;

public class MultiplicationTable {

    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter a number to see its multiplication table: ");

        if (inputScanner.hasNextInt()) {
            int number = inputScanner.nextInt();
            System.out.println("\nMultiplication Table for " + number + ":");

            for (int i = 1; i <= 10; i++) {
                System.out.println(number + " x " + i + " = " + (number * i));
            }
        } else {
            System.out.println("Invalid input. Please enter a valid integer.");
        }

        inputScanner.close();
    }
}