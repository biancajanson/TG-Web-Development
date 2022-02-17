import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Opdracht7 {
    public static void main(String[] args) {
        String[] eastcars = new String[]{"Kia", "Honda"};
        String[] cars = new String[]{"Kia", "Volkswagen", "Renault", "Honda", "BMW"};
        ArrayList<String> westcars = new ArrayList<>();

        // Opdracht A
        for (int i = 0; i < 3; i++) {
            System.out.println("Opdracht A: " + cars[i]);
        }

        // Opdracht B
        for (String car : cars) {
            System.out.println("Opdracht B: "+ car);
        }

        // Opdracht C
        int i;
        String car;

        for (i = 0; i < cars.length; i++) {
            car = cars[i];
            if (!Arrays.toString(eastcars).contains(car)) {
                westcars.add(car);
            }
        }
        System.out.println("The items in westcars: "+ westcars);

        // Opdracht D
        Arrays.sort(eastcars);
        Arrays.sort(cars);
        Collections.sort(westcars);

        System.out.println("Alphabetic Eastcars: " + Arrays.toString(eastcars));
        System.out.println("Alphabetic Cars: " + Arrays.toString(cars));
        System.out.println("Alphabetic Westcars: " + (westcars));
    }
}
