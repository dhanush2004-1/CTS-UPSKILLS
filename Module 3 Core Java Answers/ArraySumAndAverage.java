import java.util.Scanner;

public class ArraySumAndAverage {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int numberOfElements = scanner.nextInt();

        int[] array = new int[numberOfElements];

        System.out.println("Enter the elements:");
        for (int i = 0; i < numberOfElements; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }

        scanner.close();

        int sum = 0;
        for (int i = 0; i < numberOfElements; i++) {
            sum += array[i];
        }

        double average = (double) sum / numberOfElements;

        System.out.println("Sum of elements: " + sum);
        System.out.println("Average of elements: " + average);
    }
}