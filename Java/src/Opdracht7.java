import java.util.ArrayList;

public class Opdracht7 {
    public static void main(String[] args) {
        String[] eastcars = {"Kia", "Honda"};
        String[] cars = {"Kia", "Volkswagen", "Renault", "Honda", "BMW"};
        ArrayList<String> westcars = new ArrayList<>();

        // Opdracht A
        for (int i = 0; i < 3; i++) {
            System.out.println("Opdracht A: " + cars[i]);
        }

        // Opdracht B
        for(String car : cars) {
            System.out.println("Opdracht B: "+ car);
        }

        // Opdracht C
    }
}
