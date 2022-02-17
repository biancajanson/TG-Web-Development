import java.util.Scanner;
import java.time.LocalDate;
import java.time.Period;


public class Opdracht8 {
    static String userAge;

    public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Wat is uw naam? ");
    String naam = input.nextLine();
    System.out.print("Wat is uw geboortedatum? Graag invoeren als yyyy-mm-dd: ");
    userAge = input.nextLine();
    LocalDate today = LocalDate.now();
    LocalDate birthDate = LocalDate.parse(userAge);
    int calculateAge = Period.between(birthDate, today).getYears();

    System.out.println("Hallo " + naam + "!");
    System.out.println("U bent nu " + calculateAge + " jaar oud!");
    }
}
