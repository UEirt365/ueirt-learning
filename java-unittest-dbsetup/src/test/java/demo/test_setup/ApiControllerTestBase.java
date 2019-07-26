package demo.test_setup;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.inject.Inject;

@AutoConfigureMockMvc
public class ApiControllerTestBase extends DBTestBase {

    @Inject
    MockMvc mockMvc;

    private ResultActions request(MockHttpServletRequestBuilder requestBuilder, String jsonBody) throws Exception {
        MockHttpServletRequestBuilder rBuilder = requestBuilder.contentType(MediaType.APPLICATION_JSON_UTF8);

        if (jsonBody != null) {
            rBuilder = rBuilder.content(jsonBody);
        }

        return mockMvc.perform(rBuilder);
    }

    public ResultActions get(final String url, final Object... params) throws Exception {
        return request(MockMvcRequestBuilders.get(url, params).header(HttpHeaders.ACCEPT, "application/json"), null);
    }

    public ResultActions post(final String url, final Object... params) throws Exception {
        return request(MockMvcRequestBuilders.post(url, params).header(HttpHeaders.ACCEPT, "application/json"), null);
    }
}
