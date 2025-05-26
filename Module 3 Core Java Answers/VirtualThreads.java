public class VirtualThreads {
    public static void main(String[] args) throws Exception {
        for (int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> System.out.println("Running in virtual thread"));
        }
    }
}
