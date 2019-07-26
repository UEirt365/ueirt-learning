package demo.test_setup;

import com.ninja_squad.dbsetup.DbSetup;
import com.ninja_squad.dbsetup.DbSetupTracker;
import com.ninja_squad.dbsetup.destination.DataSourceDestination;
import com.ninja_squad.dbsetup.operation.Operation;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.inject.Inject;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.ninja_squad.dbsetup.Operations.sequenceOf;
import static com.ninja_squad.dbsetup.Operations.sql;
import static demo.test_setup.TestConstants.TABLE_NAME_LIST;


@RunWith(SpringRunner.class)
@SpringBootTest
public class DBTestBase {
    /**
     * DB test_setup tracker
     */
    private static final DbSetupTracker TRACKER = new DbSetupTracker();

    /**
     * Data source
     */
    @Inject
    private DataSource dataSource;

    /**
     * Initialization DB.
     *
     * @param operations List of {@link Operation} to execute
     */
    public void initDb(Operation... operations) {
        List<Operation> ops = new ArrayList<>(TABLE_NAME_LIST.size() + operations.length);

        TABLE_NAME_LIST.forEach(tableName -> ops.add(sql("TRUNCATE TABLE " + tableName)));

        Collections.addAll(ops, operations);
        TRACKER.launchIfNecessary(new DbSetup(DataSourceDestination.with(dataSource), sequenceOf(ops)));
    }
}
