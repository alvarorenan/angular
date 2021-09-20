import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];
    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: "/assets/images/forms.png",
                price: 99.99,
                code: "XPS-8796",
                duration: 120,
                rating: 4,
                releaseDate: "November, 15, 2021",
                description: "Curso de Angular FORMS"
            },
            {
                id: 2,
                name: "Angular: HTPP",
                imageUrl: "/assets/images/http.png",
                price: 45.99,
                code: "LKL-1094",
                duration: 80,
                rating: 3,
                releaseDate: "November, 4, 2020",
                description: "Curso de Angular HTTP"
                
            }
        ]
    }

    
}