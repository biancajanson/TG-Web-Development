import java.util.Scanner;
import java.util.Calendar;

public class Opdracht8 {
    public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int day, month, year;
    System.out.print("Wat is uw naam? ");
    String naam = input.nextLine();
    System.out.print("Op welke dag bent u geboren? ");
    day = input.nextInt();
    System.out.print("In welke maand bent u geboren? (Graag het nummer van de maand invoeren) ");
    month = input.nextInt();
    System.out.print("In welk jaar bent u geboren? ");
    year = input.nextInt();

    Calendar birth = Calendar.getInstance();
    birth.set(year, month, day);
    int birthNm = birth.get(Calendar.DAY_OF_YEAR);
    int birthYear = birth.get(Calendar.YEAR);

    Calendar now = Calendar.getInstance();
    int nowNm = now.get(Calendar.DAY_OF_YEAR);
    int nowYear = now.get(Calendar.YEAR);

    int age = nowYear - birthYear;

    if (birthNm > nowNm) {
        age -= 1;
    }

    System.out.println("Hallo " + naam + "!");
    System.out.println("U bent nu " + age + "jaar oud!");
    }
}
