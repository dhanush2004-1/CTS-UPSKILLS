import java.util.Scanner;

public class Grade {

    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter marks (out of 100): ");

        if (inputScanner.hasNextInt()) {
            int marks = inputScanner.nextInt();
            String grade;

            if (marks >= 90 && marks <= 100) {
                grade = "A";
            } else if (marks >= 80 && marks <= 89) {
                grade = "B";
            } else if (marks >= 70 && marks <= 79) {
                grade = "C";
            } else if (marks >= 60 && marks <= 69) {
                grade = "D";
            } else if (marks >= 0 && marks < 60) {
                grade = "F";
            } else {
                grade = "Invalid Marks. Please enter marks between 0 and 100.";
            }

            System.out.println("Assigned Grade: " + grade);

        } else {
            System.out.println("Invalid input. Please enter a valid integer for marks.");
        }

        inputScanner.close();
    }
}