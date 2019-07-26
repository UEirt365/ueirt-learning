package demo.service;

import demo.entity.PersonEntity;
import demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    PersonRepository personRepository;

    public String test() {
        List<PersonEntity> personEntities = personRepository.findAll();
        return personEntities.toString();
    }
    public String count() {
        return String.valueOf(personRepository.count());
    }
}
