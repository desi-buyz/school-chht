export default function NoticeBoard() {
  const notices = [
    {
      id: 1,
      title: "Admission Open for Session 2026-2027",
      date: "07 Aug 2026",
    },
    {
      id: 2,
      title: "Independence Day Celebration on 15 August",
      date: "15 Aug 2026",
    },
    {
      id: 3,
      title: "Half-Yearly Examination Routine Published",
      date: "20 Aug 2026",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Notices
      </h2>

      <div className="space-y-5">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="border rounded-xl p-5 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">
              {notice.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {notice.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}