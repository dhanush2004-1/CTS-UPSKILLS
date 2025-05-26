import java.util.Scanner; 

public class EvenOddChecker {

    public static void main(String[] args)
 {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");

        
        if (inputScanner.hasNextInt()) {
            int number = inputScanner.nextInt(); 
                   if (number % 2 == 0) {
               
                System.out.println(number + " is an EVEN number.");
            } 
             else {
               
                System.out.println(number + " is an ODD number.");
            }
        } else {
            System.out.println("Invalid input. Please enter a valid integer.");
        }

        inputScanner.close(); // Close the scanner to prevent resource leaks
    }
}