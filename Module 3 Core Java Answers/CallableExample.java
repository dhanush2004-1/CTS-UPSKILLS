import java.util.concurrent.*;
import java.util.*;
public class CallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Callable<Integer>> tasks = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            final int num = i;
            tasks.add(() -> num * num);
        }
        List<Future<Integer>> results = executor.invokeAll(tasks);
        for (Future<Integer> f : results) {
            System.out.println(f.get());
        }
        executor.shutdown();
    }
}
