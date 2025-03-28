
import styles from "./page.module.css";
import Link from 'next/link'
import Image from "next/image";


type Dashboard = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export default async function Home() {
  // Fetch dashboards on the server side
  const response = await fetch(
    "https://fakerapi.it/api/v2/products?_quantity=15&_taxes=12&_categories_type=uuid",
    { cache: "no-store" } // Ensures fresh data on every request
  );
  const data = await response.json();
  const dashboards: Dashboard[] = data.data;

  return (
    <div className={styles.container}>
      <h1>Dashboards</h1>
      <div className={styles.dashboardList}>
        {dashboards.map((dashboard) => (
          <div key={dashboard.id} className={styles.dashboardCard}>
            <Link href={`/dashboard/${dashboard.id}`}>
              <Image width={500} height={500} src={dashboard.image} alt={dashboard.name} />
            </Link>
            <h2>{dashboard.name}</h2>
            <p>{dashboard.description}</p>
            <p>Price: {dashboard.price}</p>
            <Link href={`/dashboard/${dashboard.id}`}>
              <button className={styles.button}>View Dashboard</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
