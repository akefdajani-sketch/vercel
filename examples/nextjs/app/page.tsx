export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#020617" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "40px 16px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Top bar */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            gap: "16px",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#0ea5e9" }}>Book</span>Flow
          </div>
          <nav
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "14px",
            }}
          >
            <a href="#features" style={{ textDecoration: "none", color: "#0f172a" }}>
              Features
            </a>
            <a href="#how-it-works" style={{ textDecoration: "none", color: "#0f172a" }}>
              How it works
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: "#0f172a" }}>
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "28px",
                lineHeight: 1.2,
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              One simple reservation system for{" "}
              <span style={{ color: "#0ea5e9" }}>salons</span>,{" "}
              <span style={{ color: "#0ea5e9" }}>studios</span> and{" "}
              <span style={{ color: "#0ea5e9" }}>Birdie</span>.
            </h1>
            <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "20px" }}>
              Create schedules, manage staff, and let customers book online. Designed for
              small businesses that don&apos;t have an in-house tech team but want a
              professional booking experience.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <button
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#0ea5e9",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Owner demo (coming soon)
              </button>
              <button
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5f5",
                  background: "#ffffff",
                  color: "#0f172a",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Learn about pricing
              </button>
            </div>
            <p style={{ marginTop: "10px", fontSize: "11px", color: "#94a3b8" }}>
              v0.1 – internal prototype: multi-tenant booking SaaS for salons, studios and
              Birdie.
            </p>
          </div>

          {/* Right-side cards */}
          <div style={{ display: "grid", gap: "12px" }}>
            <div
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                padding: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
              }}
            >
              <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>
                For salon owners
              </h3>
              <p style={{ fontSize: "12px", color: "#64748b" }}>
                Manage chairs, stylists and services. See your day at a glance and reduce
                WhatsApp chaos.
              </p>
            </div>
            <div
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                padding: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
              }}
            >
              <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>
                For yoga / fitness studios
              </h3>
              <p style={{ fontSize: "12px", color: "#64748b" }}>
                Create group classes with capacity limits, recurring schedules and simple
                attendance tracking.
              </p>
            </div>
            <div
              style={{
                borderRadius: "10px",
                background: "#ffffff",
                padding: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
              }}
            >
              <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>
                For Birdie
              </h3>
              <p style={{ fontSize: "12px", color: "#64748b" }}>
                Reserve simulators, lessons and events. The same engine powers your golf
                business and external clients.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{ marginTop: "60px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>
            Core features (MVP)
          </h2>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "8px",
              fontSize: "14px",
              color: "#334155",
            }}
          >
            <li>• Multi-location / multi-business (tenants)</li>
            <li>• Staff schedules & working hours</li>
            <li>• Services with durations & pricing</li>
            <li>• Online booking page for each business</li>
            <li>• Simple owner dashboard</li>
            <li>• SMS / email reminders (later)</li>
          </ul>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={{ marginTop: "60px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>
            How it will work
          </h2>
          <ol
            style={{
              paddingLeft: "20px",
              fontSize: "14px",
              color: "#334155",
            }}
          >
            <li>Owner creates an account and their business.</li>
            <li>They add staff, services, and working hours.</li>
            <li>System generates a public booking link.</li>
            <li>Customers book time slots; staff see everything on their phones.</li>
          </ol>
        </section>

        {/* Footer */}
        <section
          id="contact"
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "16px",
            fontSize: "11px",
            color: "#94a3b8",
          }}
        >
          Prototype by Akef – internal planning version for the reservation SaaS.
        </section>
      </div>
    </main>
  );
}
