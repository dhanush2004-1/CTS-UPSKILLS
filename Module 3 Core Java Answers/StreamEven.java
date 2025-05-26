import java.util.*;
import java.util.stream.*;
public class StreamEven {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> evens = list.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());
        System.out.println(evens);
    }
}
