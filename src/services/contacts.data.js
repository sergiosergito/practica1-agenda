import Contact from "../features/Contact.model";

export function getContacts() {
  const mockData = [
    new Contact(
      1,
      "Alice Johnson",
      "alice.johnson@example.com",
      "123 Maple Street",
      "123-456-7890",
      "USA",
      "New York"
    ),
    new Contact(
      2,
      "Bob Smith",
      "bob.smith@example.com",
      "456 Oak Avenue",
      "987-654-3210",
      "Canada",
      "Toronto"
    ),
    new Contact(
      3,
      "Carol White",
      "carol.white@example.com",
      "789 Pine Road",
      "555-123-4567",
      "UK",
      "London"
    ),
    new Contact(
      4,
      "David Brown",
      "david.brown@example.com",
      "321 Elm Street",
      "444-555-6666",
      "Australia",
      "Sydney"
    ),
    new Contact(
      5,
      "Emily Davis",
      "emily.davis@example.com",
      "654 Spruce Lane",
      "333-444-5555",
      "USA",
      "Los Angeles"
    ),
  ];

  return mockData;
}
