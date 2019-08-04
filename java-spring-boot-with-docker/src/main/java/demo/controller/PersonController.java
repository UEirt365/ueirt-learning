package demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/test", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class PersonController {

    @GetMapping(value = "/get")
    public ResponseEntity<?> test() {
        return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
    }
    @PostMapping(value = "/post")
    public ResponseEntity<?> postTest() {
        return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
    }
}
