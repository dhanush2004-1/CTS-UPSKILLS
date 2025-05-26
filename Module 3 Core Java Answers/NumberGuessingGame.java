import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(100) + 1;

        Scanner inputScanner = new Scanner(System.in);
        int guess;
        boolean guessedCorrectly = false;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I have generated a number between 1 and 100.");

        while (!guessedCorrectly) {
            System.out.print("Enter your guess: ");

            if (inputScanner.hasNextInt()) {
                guess = inputScanner.nextInt();

                if (guess < 1 || guess > 100) {
                    System.out.println("Your guess is out of range. Please guess a number between 1 and 100.");
                } else if (guess < randomNumber) {
                    System.out.println("Too low! Try again.");
                } else if (guess > randomNumber) {
                    System.out.println("Too high! Try again.");
                } else {
                    System.out.println("Congratulations! You guessed the number " + randomNumber + " correctly!");
                    guessedCorrectly = true;
                }
            } else {
                System.out.println("Invalid input. Please enter an integer.");
                inputScanner.next();
            }
        }

        inputScanner.close();
    }
}