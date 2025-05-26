import java.util.Scanner;

public class StringReversal {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String originalString = scanner.nextLine();

        scanner.close();

        StringBuilder reversedStringBuilder = new StringBuilder(originalString);
        reversedStringBuilder.reverse();
        String reversedString = reversedStringBuilder.toString();

        System.out.println("Reversed string: " + reversedString);

        String reversedStringLoop = "";
        for (int i = originalString.length() - 1; i >= 0; i--) {
            reversedStringLoop += originalString.charAt(i);
        }
    }
}