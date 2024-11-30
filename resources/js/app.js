import "flowbite";
import { initFlowbite } from "flowbite";
import "./bootstrap";

document.addEventListener("livewire:load", function () {
    initFlowbite();
});

document.addEventListener("livewire:updated", function () {
    initFlowbite();
});
