export default (function Greet() {
    function prepareName(name: string) {
        return name.toUpperCase();
    }
    
    return {
        prepareName
    };
}());