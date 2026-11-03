(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesDelete = filesToEvaluate.filter(file => file.flagged);

    // Malos nombres de clases
    class AbstractUser { }; 
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const currendate= new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const directoryFileCount: number = 33;
    
    // primer nombre - first name
    const firstName  = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const deysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

})();