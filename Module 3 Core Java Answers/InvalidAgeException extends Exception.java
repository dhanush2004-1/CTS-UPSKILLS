class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);
    }
}
public class CustomException {
    public static void main(String[] args) {
        try {
            int age = 16;
            if (age < 18) throw new InvalidAgeException("Age is less than 18");
            System.out.println("Valid age");
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
