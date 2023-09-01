const contacts = [
    { name: 'Jony', email: 'jony@example.com' },
    { name: 'Jessy', email: 'jessy@example.com' },
  ];
  
  class MemoryContactDAO {
    get() {
      return contacts;
    }
  }
  
  module.exports = new MemoryContactDAO();
  