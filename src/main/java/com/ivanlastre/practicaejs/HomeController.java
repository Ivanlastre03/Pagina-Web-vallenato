package com.ivanlastre.practicaejs;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("cantantes", List.of(
                "Diomedes Díaz",
                "Poncho Zuleta",
                "Jorge Oñate",
                "Silvestre Dangond"
        ));

        return "index";
    }
}
