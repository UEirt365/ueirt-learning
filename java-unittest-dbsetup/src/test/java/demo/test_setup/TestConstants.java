package demo.test_setup;

import java.util.Arrays;
import java.util.List;

public interface TestConstants {
    List<String> TABLE_NAME_LIST = Arrays.asList(
            Table.Person.TABLE_NAME
    );

    interface Table {
        interface Person {
            String TABLE_NAME = "person";
            interface Column {
                String ID = "id";
                String NAME = "name";
                String GENDER = "gender";
                String AGE = "age";
            }
        }
    }
}
