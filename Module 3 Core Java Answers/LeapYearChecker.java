import java.util.Scanner;

public class LeapYearChecker {

    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter a year: ");

        if (inputScanner.hasNextInt()) {
            int year = inputScanner.nextInt();
            boolean isLeapYear;

            if (year % 4 == 0) {
                if (year % 100 == 0) {
                    if (year % 400 == 0) {
                        isLeapYear = true;
                    } else {
                        isLeapYear = false;
                    }
                } else {
                    isLeapYear = true;
                }
            } else {
                isLeapYear = false;
            }

            if (isLeapYear) {
                System.out.println(year + " is a LEAP YEAR.");
            } else {
                System.out.println(year + " is NOT a LEAP YEAR.");
            }
        } else {
            System.out.println("Invalid input. Please enter a valid year (an integer).");
        }

        inputScanner.close();
    }
}